// pages/list/list.js
let datas = require('../../datas/list-data')
console.log(datas)
Page({
  /**
   * 组件的初始数据
   */
  data: {
    listArr: []
  },
  onLoad: function (options) {
    this.setData({
      listArr: datas.list_data
    })
  },
})
