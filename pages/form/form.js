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
    let existingFood = getApp().globalData.foods
    let name = e.detail.value.name;
    let status = e.detail.value.purchase_date;
    let shelf_life = e.detail.value.shelf_life;
    
    let food = {
      name: name,
      status: status,
      shelf_life: shelf_life,
      user_id: getApp().globalData.userId
    }
    existingFood.push(food)
    console.log("checking again appid", existingFood)
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
        wx.navigateTo({
          url: '/pages/fridge/fridge'
        });
      // }
    // })
  },
  /**
   * Lifecycle function--Called when page load
   */

  //  make route in rails for all tags, call API to get these tags
  onLoad: function (options) {
    const page = this
    wx.request({
      url: getApp().globalData.host + `/api/v1/taglist`,
      success: function(response) {
        // console.log(response.data[0].name)
        const tags = response.data
        page.setData({ tags })
      }
    })
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