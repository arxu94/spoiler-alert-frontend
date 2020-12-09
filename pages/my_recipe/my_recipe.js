// pages/my_recipe/my_recipe.js
const globalData = getApp().globalData
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
    console.log(options)
    this.setData({
      id: options.id
    })
    this.getRecipeInfo(options.id)
  },

  getRecipeInfo: function(id){
    wx.request({
      url: `${globalData.host}api/v1/recipes/${id}`,
      method: "GET",
      success: res => {
        const result = res.data
        result.ingredient = JSON.parse(result.ingredient)
        this.setData(result)
      }
    })
  }
})