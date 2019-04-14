//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  newsList:null
  
  },
  onLoad: function () {
    this.getNewsList();
  },
  onPullDownRefresh: function () {
    this.getNewsList();
  },
  getNewsList: function () {
    var _this = this;
    wx.showToast({
      title: "正在加载",
      icon: 'loading',
      duration: 99999999
    })
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index', // 
      data: {
        key: 'd1bb16105441a7e00d909c9c582d25a0',
        type: 'guonei'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        wx.hideToast();
        wx.stopPullDownRefresh();
        console.log(res.data.result.data)
        _this.setData({
          newsList: res.data.result.data

        });
      }
    });
  },

 
  
})
