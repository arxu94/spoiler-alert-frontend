// pages/fridge/fridge.js
Page({

  /**
   * Page initial data
   */
  data: {
    loggedIn: false,

    right: [{
      text: 'Delete',
      style: 'background-color: #F4333C; color: white',
  }]
  },
  /**
   * Lifecycle function--Called when page load
   */
  goToForm: function () {
    wx.navigateTo({
      url: '/pages/form/form',
    })
  },

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


  onReady: function () {

  },



  onShow: function () {
    this.getFoods()
},

getFoods: function() {
  wx.request({
    url: getApp().globalData.host + `/api/v1/foods`,
    success: (response) => {
      const foods = response.data
      foods.forEach(food => {
        this.addExpiration(food);
        this.addIcon(food);
      })
      this.setData({ foods })
    }
})
},

addExpiration: function(food) {
  let today = Date.parse(new Date())
  let expiration = Date.parse(new Date(food.expire_date))
  let warning_window = today + (1000 * 60 * 60 * 24 * 3)
  if (expiration < today) food['expired'] = true
  else if (expiration < warning_window) food['warn'] = true
  return food
},

addIcon: function(food) {
  let icons = [{name: 'Meat and Fish', image: '/images/meat-icon.png'}, {name: 'Dairy', image: '/images/dairy-icon.png'}, {name: 'Fruits and Veggies', image: '/images/banana-icon.png'}, {name: 'Condiments', image: '/images/sauces-icon.png'}, {name: 'Eggs', image: '/images/eggs-icon.png'}, {name: 'Others'}];

  let icon = icons.find( ({ name }) =>  name === food.tag_list[0])
  food["image_url"] = icon.image
},

changeBoolean: function(event){
  console.log(event)
  const id = event.currentTarget.dataset.id
  const foods = this.data.foods
  const food = foods.find(element => element.id === id)
    food.status = !food.status
    this.setData({foods: foods})
    console.log(food)
},

deleteFood(e) {
  const id = e.currentTarget.dataset;
  console.log(id)

  // make a DELETE request
  wx.request({
    url: getApp().globalData.host + `api/v1/foods/${id.id}`,
    method: 'DELETE',
    success() {
      // redirect to index page when done
      wx.redirectTo({
        url: '/pages/fridge/fridge'
      });
    },

createRecipe: function(event) {
  const items = this.data.foods.filter(element => element.status === true)
  console.log("testing to check status", items)
  let query = "?search="
  if (items.length === 1) {
    query += `${items[0].name},`
    getApp().globalData.foods = [items[0].name]
  } else {
    // items.forEach((item) => {
    // })
    // query += `+${item.name},`
    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      // console.log(item)
      query += `+${item.name},`
      getApp().globalData.foods.push(item.name)
    }
  }
  wx.request({
    url: getApp().globalData.host + `api/v1/find_recipes${query}`,
    success: function (response) {
      //  console.log('123',response)
        const results = response.data.result
        console.log(results)
        let recipe = getApp().globalData.recipes
        console.log(recipe)
        // add the response to global data
        getApp().globalData.recipes = results
        console.log(getApp().globalData)
        wx.navigateTo({
          url: '/pages/suggestions/suggestions',
        })
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

  },
});
}
})