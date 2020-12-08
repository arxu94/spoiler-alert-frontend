// pages/recipe/recipe.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({id: options.id})
  },
    //add recipe to own cookbook
  saveRecipe: function () {
    // data: {recipe: {user_id: 2, title: "", ingredient: '', instructions: ''}}
    //get the data
    const user_id = getApp().globalData.userId
    const title = this.data.title
    const ingredient = this.data.extendedIngredients
    ingredient.forEach(element => {
      console.log('name?', element.name)
    });
    console.log("ingrediens:", ingredient)
    const instructions = this.data.instructions
    const host = getApp().globalData.host

    const recipe = {
      "user_id": user_id,
      "title": title,
      "ingredient": ingredient,
      "instructions": instructions
    }
    console.log(recipe)
    wx.request({
      url: host + 'api/v1/recipes/',
      method: 'POST',
      data: recipe,
      success() {
        wx.reLaunch({
          url: '/pages/recipes/recipes'
        });
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
    const page = this
    const id = this.data.id
    console.log(page.data)
    wx.request({
      url: getApp().globalData.host + `api/v1/recipe_details?id=${page.data.id}`,
      success: function(res) {
        const recipe = res.data.result
        console.log(recipe)
        page.setData(recipe)
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