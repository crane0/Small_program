// pages/index/index.js
Page({
  /**
   * 组件的初始数据
   */
  data: {
    msg: '这是用户名',
    userInfo: {}
  },
  handleClick() {
    /*
    navigateTo，在跳转时，会保留当前页面，
      也就是说，左上角会有回退按钮。
    redirectTo，是直接替换，没有回退按钮
    */ 
    wx.navigateTo({
      // wx.redirectTo({
      url: '/pages/list/list',
      success() {
        console.log('跳转成功')
      }
    })
  },
  onLoad: function (options) {
    wx.getUserInfo({
      success: (data) => {
        this.setData({
          userInfo: data.userInfo
        })
      }
    })
  }
})
