// pages/home/home.js
Page({
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

  getTips: function (user) {
    wx.request({
      url: getApp().globalData.host + `api/v1/tips/${user.id}`,
      success: (response) => {
        const tips = response.data
        this.setData({ tips })
      }
    })
  },
  
   onLoad: function (options) {
    const user = wx.getStorageSync('user');
    this.setData({user});
    this.getTips(user);
  }
})