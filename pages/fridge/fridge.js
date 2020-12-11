// pages/fridge/fridge.js
const globalData = getApp().globalData
Page({

  data: {
    loggedIn: false,
    right: [{
      text: 'Delete',
      style: 'background-color: #F4333C; color: white',
    }]
  },
  
  goToForm: function () {
    wx.navigateTo({
      url: '/pages/form/form',
    })
  },

  onLoad: function (options) {},
  onReady: function () {},
  onShow: function () {
    this.getFoods()
    console.log("im at on show", globalData.foods)
    globalData.foods = []
  },

  getFoods: function() {
    const user = wx.getStorageSync('user');
    const user_id = user.id;
    console.log(user_id)
    wx.request({
      url: getApp().globalData.host + `api/v1/foods?user_id=${user_id}`,
      success: (response) => {
        const foods = response.data
        console.log(foods)
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
    let icons = [{name: 'Meat', image: '/images/meat-icon.png'}, {name: 'Dairy', image: '/images/dairy-icon.png'}, {name: 'Veggies', image: '/images/broccolli-icon.png'}, {name: 'Condiments', image: '/images/sauces-icon.png'}, {name: 'Eggs', image: '/images/eggs-icon.png'}, {name: 'Seafood', image: '/images/fish-icon-1.png'}, {name: 'Fruits', image: '/images/banana-icon.png'}, {name: 'Others', image: '/images/others-icon.png'}];

    let icon = icons.find( ({ name }) =>  name === food.tag_list[0])
    if (icon) food["image_url"] = icon.image
    else food["image_url"] = "/images/others-icon.png"
  },

  changeBoolean: function(event){
    const id = event.currentTarget.dataset.id
    const foods = this.data.foods
    const food = foods.find(element => element.id === id)
    food.status = !food.status
    this.setData({foods: foods})
  },

  deleteFood(e) {
    const id = e.currentTarget.dataset;
    
    wx.request({
      url: getApp().globalData.host + `api/v1/foods/${id.id}`,
      method: 'DELETE',
      success() {
        wx.redirectTo({ url: '/pages/fridge/fridge' });
      },
    })
  },

  createRecipe: function() {
    const items = this.data.foods.filter(element => element.status === true);
    let query = "?search="
    if (items.length === 1) {
      console.log(items)
      query += `${items[0].name},`
      getApp().globalData.foods = [items[0].name]
      console.log(query)
    } else {
    // items.forEach((item) => {
    // })
    // query += `+${item.name},`
      for (let index = 0; index < items.length; index++) {
        const item = items[index];
        console.log(item)
        query += `+${item.name},`
        getApp().globalData.foods.push(item.name)
      }
    }
    console.log(query)
    wx.request({
      url: getApp().globalData.host + `api/v1/find_recipes${query}`,
      success: function (response) {
        const results = response.data.result
        let recipe = getApp().globalData.recipes
        // add the response to global data
        getApp().globalData.recipes = results
        wx.navigateTo({ url: '/pages/suggestions/suggestions' })
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

  },
});
