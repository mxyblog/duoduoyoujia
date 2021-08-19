export default {
  // 微信云函数配置，云开发的环境ID
  wxCloudEnv: "",
  // 跳转外卖券
  waimai: {
    appId: "wxe66e50bb68bb92fe",
    path: "/pages/waimai/waimai",
  },
  // 其他小程序
  otherMiniPrograms: [
    {
      icon: "/images/waimai.png",
      name: "外卖领券",
      appId: "wxe66e50bb68bb92fe",
      path: "/pages/waimai/waimai",
    },
    {
      icon: "/images/zhou.png",
      name: "下周计划",
      appId: "wxa29edab15d4b6f96",
      path: "/pages/index/index",
    },
  ],
  // 拼多多appid
  pddAppId: "wx32540bd863b27570",
  // 首页子分类进去的详情页顶部banner图片地址
  subTypeBannerImage: {
    shot:
      "cloud://cloud1-9ghj1lk92bcc7b8a.636c-cloud1-9ghj1lk92bcc7b8a-1306765536/s-hot.jpg",
    s19:
      "cloud://cloud1-9ghj1lk92bcc7b8a.636c-cloud1-9ghj1lk92bcc7b8a-1306765536/s-19.jpg",
    spp:
      "cloud://cloud1-9ghj1lk92bcc7b8a.636c-cloud1-9ghj1lk92bcc7b8a-1306765536/s-pp.jpg",
  },
};
