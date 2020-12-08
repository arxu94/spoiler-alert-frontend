App({
  onLaunch: function () {
    const host = this.globalData.host
    wx.login({
      success: (res) => {
        wx.request({
          url: host + "login",
          method: "POST",
          data: { code: res.code },
          success: (res) => {
            wx.setStorageSync('user', res.data.user)
          }
        })
      }
    })
  },
  globalData: {
   host: 'http://localhost:3000/',
  //  host : 'https://spoiler-alert.wogengapp.cn/',
    recipes: [
    ],
    foods: [
      // {
      //   name: "Canned Beans",
      //   shelf_life: "6 months",
      // },
      // {
      //   name: "Tomato paste",
      //   shelf_life: "6 months",
      // },
      // {
      //   name: "Nuts",
      //   shelf_life: "6 months",
      // },
      // {
      //   name: "Biscuits",
      //   shelf_life: "6 months",
      // }
    ],
    }
  
})
