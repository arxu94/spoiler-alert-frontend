// pages/home/home.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  goToFridge: function() {
    wx.navigateTo({
      url: '/pages/fridge/fridge',
    })
  },

  goToForm: function() {
    wx.navigateTo({
      url: '/pages/form/form',
    })
  },
  goToRecipes: function(){
    wx.navigateTo({
      url: '/pages/recipes/recipes',
    })
  },
  goToTips: function() {
    wx.navigateTo({
      url: '/pages/tips/tips',
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
    const page = this
    const id = getApp().globalData.userId
    wx.request({
      url: getApp().globalData.host + `/api/v1/tips/user/${id}`,
      success: function (response) {
        console.log(response.data)
        const tips = response.data
      }
    })
    page.setData({ tips })
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