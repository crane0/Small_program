// app.js
App({
  /**
   * 组件的初始数据
   */
  data: {
    isPlay: false,  //设置音乐是否播放
    pageIndex: null,  //当前页面的index标识
    /*
    * 电影的详情，
    *   因为在movie.js中，已经发送了请求，获取电影的数据，
    *     在列表展示，点击movieDetail页面时，其实就可以通过已经获取的数据，进行填充，
    *     这样，就可以少发一次请求，
    *   2个组件间，进行通信，也就需要父组件（app中定义的是公共的）
    * */
    movieDetail: {}
  }
})
