// pages/list/list.js
let datas = require('../../datas/list-data')
Page({
  /**
   * 组件的初始数据
   */
  data: {
    listArr: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      listArr: datas.list_data
    })
  },
})
