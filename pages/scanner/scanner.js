// pages/scanner/scanner.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  anything: function(){
    wx.scanCode({
      success (res) {
        console.log(res.result)
        const barcode = res.result
        wx.request({
          url: `https://mxnzp.com/api/barcode/goods/details?barcode=${barcode}&app_id=zlcwkesmllkgvjbm&app_secret=NHlrMTd5c3JLYzU4M0dsTjl5YVp6UT09`,
          success(res){
            console.log(res.data.data.goodsName)
            const cn_item = res.data.data.goodsName
          }
        })
      }
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})