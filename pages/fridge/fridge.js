// pages/fridge/fridge.js
Page({

  /**
   * Page initial data
   */
  data: {
    loggedIn: false
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // BONUS: we are getting options from the queries sent by the previous page (our post page)
    // console.log(options)
    // // getting the stories from our globalData (in app.js) and the loggedIn status from the post page
    // this.setData({ foods: getApp().globalData.foods})
    
      // foods: [
      //   {
      //     name: "Milk",
      //     status: "Expiring soon"
      //   },
      //   {
      //     name: "Tomato paste",
      //   },
      //   {
      //     name: "Nuts",
      //   },
      //   {
      //     name: "Biscuits",
      //   }
      // ] })
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
    wx.request({
      url: getApp().globalData.host + `/api/v1/foods`,
      success: function (response) {
        console.log(response.data[0])
        const foods = response.data
        page.setData({ foods })
      }
  })
},
changeBoolean: function(event){
  console.log(event)
  const id = event.currentTarget.dataset.id
  const foods = this.data.foods
  const food = foods.find(element => element.id === id)
  food.status = !food.status
  this.setData({foods: foods})
  console.log(food)
  // console.log(food)
},

createRecipe: function(event) {
  const items = this.data.foods.filter(element => element.status === true)
  let query = "?search="
  if (items.length === 1) {
    query += `${items.name},`
  } else {
    // items.forEach((item) => {
    // })
    // query += `+${item.name},`
    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      console.log(item)
      query += `+${item.name},`
    }
  }
  wx.request({
    url: getApp().globalData.host + `api/v1/find_recipes${query}`,
    success: function (response) {
       console.log('123',response)
        const recipes = response.data.result
        console.log(recipes)
        // add the response to global data
        // page.setData({ coupons })
      }
  })
  console.log(event)
  console.log(query)
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