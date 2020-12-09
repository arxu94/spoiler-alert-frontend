// pages/recipes/recipes.js
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
    
  },

  goToMyRecipe: function(event) {
      const id = event.currentTarget.dataset.id
      console.log(id)
      wx.navigateTo({
        url: `/pages/my_recipe/my_recipe?id=${id}`,
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
    // const user_id = getApp().globalData.userId;
    const user = wx.getStorageSync('user');
    const user_id = user.id;

    console.log(user)
    wx.request({
      url: getApp().globalData.host +`api/v1/users/${user_id}/recipes`,
      success: (response) => {
      console.log(response.data.recipes)
      const my_recipes = response.data.recipes
      const word_test_whatever = my_recipes[0].title.substring(0, 30)
      console.log(word_test_whatever)
      this.setData({my_recipes})
      }
    })
  },

  deleteRecipe: function(e) {
    const recipe_id = e.currentTarget.dataset;
    console.log(recipe_id)
    wx.request({
      url: getApp().globalData.host + `api/v1/recipes/${recipe_id.id}`,
      method: 'DELETE',
      success() {
        wx.redirectTo({
          url: '/pages/recipes/recipes'
        });
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