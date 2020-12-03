App({
  onLaunch: function () {
    const host = this.globalData.host
      let page = this
    console.log("beginning login")
    wx.login({
      success: (res) => {
        console.log(res)
        // insert next code here
        wx.request({
          url: host + "login",
          method: "post",
          data: {
            code: res.code
          },
          // insert next code here
          success: (res) => {
            console.log('logged in', res.data)
            console.log("welcome user!")
            this.globalData.userId = res.data.user.id
          }
        })
      }
    })
  },
  globalData: {
   host: 'http://localhost:3000/',
    // ## place holder for dooku server ##
    userInfo: null,
    foods: [
      {
        name: "Canned Beans",
        shelf_life: "6 months",
      },
      {
        name: "Tomato paste",
        shelf_life: "6 months",
      },
      {
        name: "Nuts",
        shelf_life: "6 months",
      },
      {
        name: "Biscuits",
        shelf_life: "6 months",
      }
    ],
    }
  
})
