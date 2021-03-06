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
   *
   *  页面已加载，就要获取数据，进行填充
   */
  onLoad: function (options) {
    this.setData({
      listArr: datas.list_data
    })
  },
  //去detail页面，
  toDetail (event) {
    let index = event.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/detail/detail?index='+index,
      success() {
        console.log('跳转成功')
      }
    })
  },

  /*
  * 点击轮播图跳转
  *   对应的是轮播图（子元素），不是外部容器（父元素）
  *   所以，要使用target，而不是currentTarget
  * */
  handleToDetail (event) {
    console.log(event)
    let index = event.target.dataset.index
    wx.navigateTo({
      url: '/pages/detail/detail?index='+index,
      success() {
        console.log('跳转成功')
      }
    })
  }
})
