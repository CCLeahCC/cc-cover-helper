const DEFAULT_BASE_URL = "https://ark.cn-beijing.volces.com/api/v3";
const DEFAULT_MODEL = "doubao-seedream-5-0-260128";

function json(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function cleanPrompt(value) {
  return String(value || "").trim().slice(0, 4000);
}

function pickImageUrl(payload) {
  const item = payload?.data?.[0];
  if (item?.url) return item.url;
  if (item?.b64_json) return `data:image/png;base64,${item.b64_json}`;
  if (payload?.images?.[0]?.url) return payload.images[0].url;
  if (payload?.result?.images?.[0]) return payload.result.images[0];
  return "";
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return json(res, 405, { error: "只支持 POST 请求。" });
  }

  const apiKey = process.env.ARK_API_KEY;
  if (!apiKey) {
    return json(res, 500, { error: "还没有配置 ARK_API_KEY，暂时不能生成图片。" });
  }

  const prompt = cleanPrompt(req.body?.prompt);
  if (!prompt) return json(res, 400, { error: "缺少图片生成 Prompt。" });

  const baseUrl = (process.env.ARK_BASE_URL || DEFAULT_BASE_URL).replace(/\/$/, "");
  const model = process.env.ARK_IMAGE_MODEL || DEFAULT_MODEL;
  const size = process.env.ARK_IMAGE_SIZE || "1080x1440";

  try {
    const upstream = await fetch(`${baseUrl}/images/generations`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        prompt,
        size,
        response_format: "url",
        watermark: false,
      }),
    });

    const payload = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      const message = payload?.error?.message || payload?.message || "上游图片接口调用失败。";
      return json(res, upstream.status, { error: message, detail: payload });
    }

    const imageUrl = pickImageUrl(payload);
    if (!imageUrl) return json(res, 502, { error: "接口已返回，但没有找到图片地址。", detail: payload });

    return json(res, 200, { imageUrl });
  } catch (error) {
    return json(res, 500, { error: error.message || "图片生成服务异常。" });
  }
};
