// pages/detail/detail.js
let datas = require('../../datas/list-data')

//获取小程序的实例（可以直接使用app.js中定义的属性，方法等）
let appData = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    contentObj: {},
    index: 0,
    isCollected: false,
    isPlay: false
  },

  /**
   * 生命周期函数--监听页面加载
   * options中，可以获取打开当前页面所调用的 query 参数。
   */
  onLoad: function (options) {
    // console.log(options)  // {index: "0"}
    const {index} = options
    const contentObj = datas.list_data[index]
    this.setData({
      contentObj,
      index   //配合收藏功能使用
    })
    /*
    * 页面加载时，应该要读取到Storage中的内容，判断显示是否收藏
    * */
    // 获取存储的数据，如果没有一个，也就什么都不做
    let obj = wx.getStorageSync('isCollected');
    if (obj) {
      //判断是否收藏当前页面
      let isCollected = obj[index];
      //因为如果用户没有点击过当前页面，isCollected就是undefined
      //不想要undefined，只想要2种状态。
      isCollected = isCollected ? true : false
      this.setData({
        isCollected
      })
    }


    let {isPlay, pageIndex} = appData.data
    if (isPlay && pageIndex===index) {
      this.setData({
        isPlay: true
      })
    }

    //监听音乐的播放
    wx.onBackgroundAudioPlay(() => {
      this.setData({
        isPlay: true
      })
      appData.data.isPlay = true
      appData.data.pageIndex = index
    })
    //监听音乐的暂停
    wx.onBackgroundAudioPause(() => {
      this.setData({
        isPlay: false
      })
      appData.data.isPlay = false
    })
  },

  handleCollect () {
    const isCollected = !this.data.isCollected
    this.setData({
      isCollected
    })
    const title = isCollected ? '收藏成功' : '取消收藏'
    wx.showToast({
      title,
      icon: 'success'
    })

    /*
    * 使用index区别每一个，
    * 因为要保存所有的状态，以对象的形式，{"0":true,"1":false,"3":false,}
    * */
    //获取当前内容的index
    const index = this.data.index
    //如果所有的detail列表中所有的内容，都没有点击收藏过，则Storage中是没有的，所以 || {}
    let obj = wx.getStorageSync('isCollected') || {}
    obj[index] = isCollected
    /*
    * key如果存的是index，则会在Storage中存储多个，
    *   之后在对Storage进行操作时，就比较麻烦
    * 所以，以isCollected作为key即可。value格式：{"0":true,"1":false,"3":false,}
    * */
    wx.setStorage({
      key: 'isCollected',
      data: obj
    })
  },

  handleMusic () {
    const isPlay = !this.data.isPlay
    this.setData({
      isPlay
    })

    const {dataUrl,title} = this.data.contentObj.music
    if (isPlay) {
      wx.playBackgroundAudio({
        title,
        dataUrl
      })
    } else {
      wx.pauseBackgroundAudio()
    }
  },

  //分享时，呼出操作菜单
  handleShare () {
    wx.showActionSheet({
      itemList: [
        '分享到朋友圈',
        '发送给朋友'
      ]
    })
  }
})