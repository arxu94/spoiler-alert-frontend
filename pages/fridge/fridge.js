// pages/fridge/fridge.js
Page({

  /**
   * Page initial data
   */
  data: {
    loggedIn: false
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // BONUS: we are getting options from the queries sent by the previous page (our post page)
    // console.log(options)
    // // getting the stories from our globalData (in app.js) and the loggedIn status from the post page
    // this.setData({ foods: getApp().globalData.foods})
    
      // foods: [
      //   {
      //     name: "Milk",
      //     status: "Expiring soon"
      //   },
      //   {
      //     name: "Tomato paste",
      //   },
      //   {
      //     name: "Nuts",
      //   },
      //   {
      //     name: "Biscuits",
      //   }
      // ] })
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
    const page = this
    wx.request({
      url: getApp().globalData.host + `/api/v1/foods`,
      success: function (response) {
        console.log(response.data[0])
        const foods = response.data
        page.setData({ foods })
      }
  })
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