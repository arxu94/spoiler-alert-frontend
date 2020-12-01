// pages/form/form.js
Page({

  /**
   * Page initial data
   */
  data: {
    foods: []
  },

  // New Coupon Submission
  formSubmit: function (e) {
    //...
    console.log('data', e)
    let name = e.detail.value.name;
    let purchase_date = e.detail.value.purchase_date;
    let shelf_life = e.detail.value.shelf_life;
    
    let food = {
      name: name,
      purchase_date: purchase_date,
      shelf_life: shelf_life,
      user_id: getApp().globalData.userId
    }

    let currentFoods = this.data.foods;
    this.setData({
      foods: [...currentFoods, food]
    })
    // Post data to API
    // wx.request({
      // url: `https://coffee-in-xalabam.herokuapp.com/api/v1/coupons`,
      // url: getApp().globalData.host + `/api/v1/foods`,
      // method: 'POST',
      // data: { food: food },
      // success() {
        // redirect to index page when done
        wx.reLaunch({
          url: '/pages/fridge/fridge'
        });
      // }
    // })
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