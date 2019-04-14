// pages/keji/keji.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
        type: 'guoji'
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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})