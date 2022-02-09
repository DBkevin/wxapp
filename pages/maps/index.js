// pages/maps/index.js
let plugin = requirePlugin('routePlan');
let key = 'SFJBZ-AXGLK-SSJJX-AB7JS-YSVK6-I6BQ6';  //使用在腾讯位置服务申请的key
let referer = '中午吃个啥';   //调用插件的app的名称
let endPoint = JSON.stringify({  //终点
    'name': '厦门美莱旗舰店',
    'latitude': 24.484589,
    'longitude': 118.123204
});
wx.navigateTo({
    url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
});
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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