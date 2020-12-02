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
   // host: 'http://localhost:3000/',
    // ## place holder for dooku server ##
    userInfo: null,
    foods: [
      {
        name: "Milk",
        status: "Expiring soon",
        image: "https://tse1-mm.cn.bing.net/th/id/OIP.H5kIGXlqbaPOgs9KmXbKvAAAAA?pid=Api&w=300&h=240&rs=1",
      },
      {
        name: "Tomato paste",
        image: "https://tse1-mm.cn.bing.net/th/id/OIP.Xm-VpMwM2n7uCOkSh74FTQHaFU?pid=Api&rs=1",
      },
      {
        name: "Nuts",
        image: "http://www.trbimg.com/img-5364238e/turbine/la-dd-is-hazelnut-milk-the-new-almond-milk-20140416",
      },
      {
        name: "Biscuits",
        image: "https://tse3-mm.cn.bing.net/th/id/OIP.tCni9i-9u08VYudGXtRaGgAAAA?pid=Api&w=250&h=250&rs=1",
      }
    ],
    }
  
})
