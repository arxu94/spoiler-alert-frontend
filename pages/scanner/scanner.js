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
        console.log(res)
        const barcode = res.result
        wx.request({
          url: `https://mxnzp.com/api/barcode/goods/details?barcode=${barcode}&app_id=zlcwkesmllkgvjbm&app_secret=NHlrMTd5c3JLYzU4M0dsTjl5YVp6UT09`,
          success(res){
            console.log(res.data.data)
            // console.log(res.data.data.goodsName)
            // console.log(res.data.data.brand)
            const cn_item = res.data.data.goodsName
            const cn_brand = res.data.data.brand
            const item = (cn_item.split(`${cn_brand}`)).join("")
            console.log(item)
              wx.request({
                url: `http://fanyi.youdao.com/translate?&doctype=json&type=AUTO&i=${item}`,
                success(res){
                  console.log(res.data.translateResult[0][0].tgt)
                }
              })
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