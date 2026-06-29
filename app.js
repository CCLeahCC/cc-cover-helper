const niches = {
  "穿搭时尚": {
    layouts: ["杂志大标题", "人物大片留白", "左右分栏", "单品清单卡", "Lookbook 拼贴"],
    styles: ["高级杂志感", "法式松弛感", "甜酷潮流感", "极简秀场感", "复古胶片感"],
    palettes: [
      { name: "奶油白 + 炭黑 + 番茄红", colors: ["#fff7e8", "#172026", "#e84b3c"] },
      { name: "燕麦灰 + 牛仔蓝 + 酒红", colors: ["#d8d1c7", "#3b5f8a", "#8f2637"] },
      { name: "象牙白 + 可可棕 + 金属银", colors: ["#f7eddc", "#6f5142", "#c5c4bf"] },
      { name: "雾粉 + 墨黑 + 珍珠白", colors: ["#dca6a6", "#12171b", "#fffaf0"] },
      { name: "橄榄绿 + 沙色 + 深棕", colors: ["#66735b", "#d8c2a1", "#3f2f27"] },
    ],
    points: "3 套可直接照穿的搭配；适合通勤和周末；普通人也能快速套用",
  },
  "美妆护肤": {
    layouts: ["产品特写主视觉", "测评对比卡", "步骤教程卡", "干净留白", "圆角标签矩阵"],
    styles: ["奶油清透感", "实验室专业感", "甜美少女感", "高端柜台感", "水光透明感"],
    palettes: [
      { name: "玫瑰粉 + 珍珠白 + 香槟金", colors: ["#e9a6b2", "#fff8f0", "#d4af73"] },
      { name: "冰蓝 + 透明白 + 银灰", colors: ["#b9d8ee", "#f9fdff", "#aeb8c2"] },
      { name: "蜜桃橘 + 奶油白 + 可可棕", colors: ["#f5a06d", "#fff1df", "#7a5244"] },
      { name: "薰衣草紫 + 雾粉 + 墨灰", colors: ["#b8a7d9", "#efd3d9", "#34343c"] },
      { name: "薄荷绿 + 象牙白 + 深海蓝", colors: ["#9dd4c5", "#fff8e8", "#1f4f63"] },
    ],
    points: "肤感对比；适合人群；使用步骤；封面要有干净的产品质感",
  },
  "学习成长": {
    layouts: ["九宫格信息卡", "大字报标题", "清单卡片", "对比表格", "便签步骤图"],
    styles: ["极简专业感", "资料库秩序感", "高对比信息感", "校园笔记感", "电子白板感"],
    palettes: [
      { name: "海盐蓝 + 奶白 + 炭黑", colors: ["#8fc3de", "#fff9ec", "#151b1f"] },
      { name: "柠檬黄 + 深灰 + 纸白", colors: ["#f2cf4a", "#30343b", "#fbf7ed"] },
      { name: "松石绿 + 米白 + 靛蓝", colors: ["#5fb2a2", "#f6eddc", "#23436a"] },
      { name: "电光紫 + 雾灰 + 墨黑", colors: ["#8167d8", "#e8e7ef", "#15151a"] },
      { name: "番茄红 + 奶油白 + 深蓝", colors: ["#e84b3c", "#fff3df", "#22395f"] },
    ],
    points: "3 个可执行方法；适合新手；附一个复盘模板；标题要像干货资料封面",
  },
  "旅行生活": {
    layouts: ["照片留白标题", "路线地图卡", "手帐拼贴", "景点清单卡", "电影海报感"],
    styles: ["胶片旅行感", "清爽攻略感", "松弛生活感", "复古明信片感", "城市漫游感"],
    palettes: [
      { name: "天空蓝 + 沙滩米 + 落日橙", colors: ["#77b7dc", "#e9d1a5", "#ee8b4a"] },
      { name: "森林绿 + 云白 + 木棕", colors: ["#3f7256", "#f6f3e8", "#8a5f3d"] },
      { name: "海盐蓝 + 珊瑚红 + 奶白", colors: ["#83b6c9", "#ef6a5b", "#fff4e7"] },
      { name: "胶片黄 + 暖灰 + 深咖", colors: ["#e0b84f", "#c8beb0", "#4e3a2d"] },
      { name: "雾紫 + 月光白 + 靛蓝", colors: ["#a99bc9", "#f8f3e7", "#27466b"] },
    ],
    points: "路线亮点；避坑建议；适合周末出发；封面要有地点氛围",
  },
  "家居审美": {
    layouts: ["场景图大留白", "前后对比", "细节清单卡", "拼贴灵感板", "软装色卡"],
    styles: ["温柔生活感", "中古复古感", "清冷极简感", "奶油侘寂感", "编辑部家居感"],
    palettes: [
      { name: "燕麦米 + 胡桃木 + 橄榄绿", colors: ["#dac8ad", "#75543c", "#6f7f63"] },
      { name: "奶油白 + 雾蓝 + 石墨灰", colors: ["#fff1dd", "#9bb7c9", "#3c4146"] },
      { name: "亚麻灰 + 陶土红 + 象牙白", colors: ["#b8b0a4", "#b9654d", "#fbf1df"] },
      { name: "鼠尾草绿 + 暖白 + 黄铜金", colors: ["#91aa90", "#fff7e8", "#b98945"] },
      { name: "焦糖棕 + 粉米 + 墨黑", colors: ["#b87945", "#ead0c6", "#1d2225"] },
    ],
    points: "空间痛点；改造细节；预算友好；封面要有家居杂志感",
  },
  "美食探店": {
    layouts: ["美食大图压标题", "手帐拼贴", "榜单清单卡", "菜单标签卡", "探店票据感"],
    styles: ["甜酷潮流感", "烟火气食欲感", "港风复古感", "清爽攻略感", "街头招牌感"],
    palettes: [
      { name: "柠檬黄 + 海盐蓝 + 炭黑", colors: ["#f1ce3f", "#70aac3", "#172026"] },
      { name: "番茄红 + 奶油白 + 烤面包棕", colors: ["#e84835", "#fff0d8", "#a9673f"] },
      { name: "牛油果绿 + 米白 + 辣椒红", colors: ["#86a96f", "#f8efd9", "#d73b2f"] },
      { name: "芝士黄 + 可乐棕 + 纸白", colors: ["#f3bd45", "#6b3c2e", "#fff8e9"] },
      { name: "莓果粉 + 深巧克力 + 杏仁白", colors: ["#d95f7d", "#3f2926", "#f5e7d1"] },
    ],
    points: "5 个必吃菜；人均价格；排队和避坑；封面要有诱人的食物特写",
  },
  "非遗文化": {
    layouts: ["展览海报", "纹样信息卡", "左右分栏", "知识卡片", "图文档案感"],
    styles: ["东方新中式", "博物馆展陈感", "手作纹理感", "学术海报感", "现代民艺感"],
    palettes: [
      { name: "靛蓝 + 米白 + 朱砂红", colors: ["#214f7a", "#f4ead7", "#b33a32"] },
      { name: "蜡染蓝 + 银白 + 木炭黑", colors: ["#315f8c", "#f3f4ef", "#1b2023"] },
      { name: "苗银灰 + 玫红 + 深靛", colors: ["#b8bbc0", "#c13d73", "#22385f"] },
      { name: "植物绿 + 土陶红 + 麻布米", colors: ["#5d7b57", "#a54c3d", "#d8c6a3"] },
      { name: "黑底银纹 + 石榴红 + 暖白", colors: ["#15191c", "#ba3d38", "#fff5e4"] },
    ],
    points: "纹样含义；工艺细节；适合展览或课程；封面要有文化质感",
  },
  "个人品牌": {
    layouts: ["个人头像标题卡", "观点金句海报", "课程封面", "直播预告卡", "品牌色块"],
    styles: ["专业咨询感", "清爽主理人感", "高级简历感", "知识 IP 感", "温柔可信感"],
    palettes: [
      { name: "深蓝 + 奶白 + 金色", colors: ["#203a5c", "#fff4de", "#c7984a"] },
      { name: "墨黑 + 象牙白 + 珊瑚红", colors: ["#15191c", "#f7eedf", "#ee6352"] },
      { name: "鼠尾草绿 + 暖灰 + 深咖", colors: ["#8ca58e", "#c9c1b6", "#4e362e"] },
      { name: "紫灰 + 雾白 + 石墨黑", colors: ["#8b82a5", "#f2f0ec", "#25272b"] },
      { name: "海军蓝 + 天空蓝 + 纸白", colors: ["#243a5a", "#8bbbd8", "#fbf7ee"] },
    ],
    points: "一句核心观点；适合目标用户；突出可信度；封面要像专业主理人发布",
  },
};

const contentTypes = ["清单盘点", "教程干货", "探店种草", "测评对比", "灵感合集", "活动预告", "文化科普"];
const stateIds = ["coverTitle", "niche", "contentType", "layout", "style", "palette", "points"];

const elements = Object.fromEntries(stateIds.map((id) => [id, document.getElementById(id)]));
const promptOutput = document.getElementById("promptOutput");
const statusText = document.getElementById("statusText");
const swatchRow = document.getElementById("swatchRow");
const coverImage = document.getElementById("coverImage");
const imageStatus = document.getElementById("imageStatus");
const previewPlaceholder = document.getElementById("previewPlaceholder");
const downloadImage = document.getElementById("downloadImage");
const generateImageBtn = document.getElementById("generateImageBtn");

function fillSelect(select, options, formatter = (item) => item) {
  const previous = select.value;
  select.innerHTML = "";
  options.forEach((item) => {
    const option = document.createElement("option");
    option.value = formatter(item);
    option.textContent = formatter(item);
    select.appendChild(option);
  });
  if (options.some((item) => formatter(item) === previous)) select.value = previous;
}

function getTitles(niche, contentType) {
  const theme = {
    "清单盘点": ["这 5 个细节太值得收藏", "新手照着做就够了", "一张图讲清我的私藏清单"],
    "教程干货": ["从 0 到 1 的实用方法", "普通人也能学会的步骤", "把复杂问题拆成 3 步"],
    "探店种草": ["这家真的值得专门去一次", "本地人会反复回来的店", "一眼就想收藏的探店攻略"],
    "测评对比": ["真实体验后我留下了这几个", "同类里更值得选的是它", "优缺点一次讲清楚"],
    "灵感合集": ["最近反复看的灵感合集", "让审美变稳的几个方向", "适合马上套用的灵感板"],
    "活动预告": ["这个周末可以安排起来", "值得提前收藏的活动信息", "别错过这场线下体验"],
    "文化科普": ["这组纹样背后的故事", "看懂这个细节就入门了", "把传统美学讲给更多人听"],
  };
  const nicheLead = {
    "穿搭时尚": ["一眼收藏的穿搭公式", "普通人穿出质感的关键", "这套配色真的很显贵"],
    "美妆护肤": ["这套护肤思路更适合新手", "妆容干净的关键在这里", "空瓶后还想继续用的好物"],
    "学习成长": ["效率变高以后我才明白", "这份学习计划救了我", "新手最该掌握的复盘方法"],
    "旅行生活": ["这个城市适合慢慢逛", "周末出逃路线安排好了", "这份旅行攻略可以直接抄"],
    "家居审美": ["小空间变好看的关键", "家里显贵的 5 个细节", "这个角落终于被我救回来了"],
    "美食探店": ["厦门美食必吃清单", "这家店真的香迷糊了", "本地人私藏的好吃店"],
    "非遗文化": ["把传统纹样做成现代设计", "这块布里藏着一段故事", "看懂苗绣里的图案语言"],
    "个人品牌": ["让别人记住你的表达方式", "主理人账号可以这样做", "个人品牌第一张封面这样搭"],
  };
  return [...nicheLead[niche], ...theme[contentType]];
}

function syncOptions(resetTitle = false) {
  const niche = elements.niche.value || Object.keys(niches)[0];
  const contentType = elements.contentType.value || contentTypes[0];
  const config = niches[niche];
  fillSelect(elements.layout, config.layouts);
  fillSelect(elements.style, config.styles);
  fillSelect(elements.palette, config.palettes, (item) => item.name);
  if (resetTitle || !elements.coverTitle.value) elements.coverTitle.value = getTitles(niche, contentType)[0];
  if (!elements.points.value) elements.points.value = config.points;
}

function selectedPalette() {
  const config = niches[elements.niche.value];
  return config.palettes.find((item) => item.name === elements.palette.value) || config.palettes[0];
}

function renderSwatches(palette) {
  swatchRow.innerHTML = "";
  palette.colors.forEach((color) => {
    const swatch = document.createElement("span");
    swatch.style.backgroundColor = color;
    swatchRow.appendChild(swatch);
  });
}

function buildPrompt() {
  const title = elements.coverTitle.value.trim() || getTitles(elements.niche.value, elements.contentType.value)[0];
  const niche = elements.niche.value;
  const contentType = elements.contentType.value;
  const layout = elements.layout.value;
  const style = elements.style.value;
  const palette = selectedPalette();
  const points = elements.points.value.trim() || niches[niche].points;

  return [
    `请为小红书「${niche}」账号设计一张「${contentType}」封面图。`,
    `封面主标题：${title}`,
    `内容要点：${points}`,
    `设计方向：${layout}，${style}。`,
    `配色：${palette.name}，主色、辅助色和文字色要有清晰对比，适配该内容品类的视觉预期。`,
    "画布规格：小红书图文封面竖版 3:4，建议 1080x1440 px 或 1242x1660 px，核心标题放在中间安全区。",
    "字体排版：主标题使用醒目的中文标题字，字重明确；副标题、标签和信息点保持网格秩序，手机信息流缩小后仍然可读。",
    "画面结构：标题区优先清晰，主体视觉与信息区分层明确；可以使用照片、纸张拼贴、色块、细线、图标或材质纹理辅助表达。",
    "质感要求：像成熟内容创作者发布的封面，避免杂乱贴纸、过度滤镜、低清素材、字体挤压、文字遮挡、元素堆满边缘和山寨品牌标识。",
  ].join("\n");
}

function buildImagePrompt() {
  const title = elements.coverTitle.value.trim() || getTitles(elements.niche.value, elements.contentType.value)[0];
  const niche = elements.niche.value;
  const contentType = elements.contentType.value;
  const layout = elements.layout.value;
  const style = elements.style.value;
  const palette = selectedPalette();
  const points = elements.points.value.trim() || niches[niche].points;

  return [
    `为小红书「${niche}」账号生成一张「${contentType}」封面效果图。`,
    `封面主标题：${title}`,
    `内容要点：${points}`,
    `设计方向：${layout}，${style}。`,
    `配色：${palette.name}。`,
    "画布为竖版 3:4，小红书图文封面比例。",
    "整体是成熟内容创作者会发布的平面设计封面，构图清晰，有强主视觉和明确标题区。",
    "可以使用真实感照片、色块、纸张纹理、细线、图标和材质拼贴，但画面保持高级、干净、可读。",
    "中文标题要尽量清晰准确，避免错别字、乱码、文字挤压、元素堆满边缘、廉价贴纸感和山寨品牌标识。",
  ].join("\n");
}

function render() {
  const palette = selectedPalette();
  renderSwatches(palette);
  promptOutput.value = buildPrompt();
  statusText.textContent = "已生成";
}

function refreshTitle() {
  const titles = getTitles(elements.niche.value, elements.contentType.value);
  const current = elements.coverTitle.value.trim();
  const nextPool = titles.filter((title) => title !== current);
  const nextTitles = nextPool.length ? nextPool : titles;
  elements.coverTitle.value = nextTitles[Math.floor(Math.random() * nextTitles.length)];
  render();
}

function shuffleExample() {
  const nicheNames = Object.keys(niches);
  elements.niche.value = nicheNames[Math.floor(Math.random() * nicheNames.length)];
  elements.contentType.value = contentTypes[Math.floor(Math.random() * contentTypes.length)];
  elements.points.value = "";
  syncOptions(true);
  render();
}

function copyPrompt() {
  try {
    promptOutput.focus();
    promptOutput.select();
    const copied = document.execCommand("copy");
    if (!copied) throw new Error("copy command failed");
    statusText.textContent = "已复制";
  } catch (error) {
    promptOutput.focus();
    promptOutput.select();
    statusText.textContent = "已选中";
  }
  window.setTimeout(() => {
    statusText.textContent = "已生成";
  }, 1400);
}

function setImageState(text, isLoading = false) {
  imageStatus.textContent = text;
  generateImageBtn.disabled = isLoading;
  generateImageBtn.textContent = isLoading ? "生成中..." : "生成封面图";
}

async function generateCoverImage() {
  setImageState("生成中", true);
  previewPlaceholder.hidden = false;
  previewPlaceholder.textContent = "正在生成封面效果图，通常需要几十秒。";

  try {
    const response = await fetch("/api/generate-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: buildImagePrompt(),
        title: elements.coverTitle.value.trim(),
        niche: elements.niche.value,
        contentType: elements.contentType.value,
        palette: selectedPalette().name,
      }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || "图片生成失败");

    coverImage.src = data.imageUrl;
    coverImage.hidden = false;
    previewPlaceholder.hidden = true;
    downloadImage.href = data.imageUrl;
    downloadImage.hidden = false;
    setImageState("已生成", false);
  } catch (error) {
    coverImage.hidden = true;
    downloadImage.hidden = true;
    previewPlaceholder.hidden = false;
    previewPlaceholder.textContent = error.message || "图片生成失败，请稍后再试。";
    setImageState("未生成", false);
  }
}

fillSelect(elements.niche, Object.keys(niches));
fillSelect(elements.contentType, contentTypes);
syncOptions(true);
render();

elements.niche.addEventListener("change", () => {
  elements.points.value = "";
  syncOptions(true);
  render();
});

elements.contentType.addEventListener("change", () => {
  syncOptions(true);
  render();
});

["coverTitle", "layout", "style", "palette", "points"].forEach((id) => {
  elements[id].addEventListener("input", render);
  elements[id].addEventListener("change", render);
});

document.getElementById("generateBtn").addEventListener("click", render);
document.getElementById("shuffleBtn").addEventListener("click", shuffleExample);
document.getElementById("titleRefreshBtn").addEventListener("click", refreshTitle);
document.getElementById("copyBtn").addEventListener("click", copyPrompt);
generateImageBtn.addEventListener("click", generateCoverImage);
