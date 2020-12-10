// pages/home/home.js
import event from '../../utils/event'

Page({
  data: {
  },

  onShow: function(){
    let user = wx.getStorageSync('user')
    console.log('onShow', user)
    if (user) this.getTips(user);
    else setTimeout(() => {
      user = wx.getStorageSync('user');
      console.log('onShow -- 2', user)
      this.getTips(user);
    }, 500);
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
        console.log(response)
        const tips = response.data
        this.setData({ tips })
      }
    })
  },
  
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
    // let user = wx.getStorageSync('user');
    // until (user) 
    // if (!user) user = wx.getStorageSync('user');
    // wx.request({
    //   url: '',
    //   data: {user_id: user.id},
    //   success: res => console.log(res);
    // })
    this.setData({
      tips: wx.getStorageSync('tips')
    })
  }
})