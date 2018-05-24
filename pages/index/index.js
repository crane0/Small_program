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
