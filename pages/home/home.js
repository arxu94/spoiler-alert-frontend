// pages/home/home.js
import event from '../../utils/event'

Page({
  data: {
  },

  onShow: function(){
    let user = wx.getStorageSync('user')
    this.setTips()
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

  // getTips: function (user) {
  //   wx.request({
  //     url: getApp().globalData.host + `api/v1/tips/${user.id}`,
  //     success: (response) => {
  //       console.log(response)
  //       const tips = response.data
  //       console.log(tips)
  //       this.setData({ tips })
  //     }
  //   })
  // },
  
   onLoad: function (options) {
     let page = this
    event.on("hasUserId", page, page.setUser)
    event.on("hasUserId", page, page.setTips)
  },

  setUser:function(){
    const user = wx.getStorageSync('user');
    this.setData({user});
  },

  setTips: function(){
    this.setData({
      tips: wx.getStorageSync('tips')
    })
  }
})