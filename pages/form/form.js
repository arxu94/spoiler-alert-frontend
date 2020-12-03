// pages/form/form.js
Page({

  /**
   * Page initial data
   */
  data: {
    array: ['Meat and Fish', 'Dairy', 'Fruits and Veggies', 'Condiments', 'Eggs', 'Others'],
    selectedFoodIndex: 0,
    objectArray: [
      {
        id: 0,
        name: 'Meat and Fish'
      },
      {
        id: 1,
        name: 'Dairy'
      },
      {
        id: 2,
        name: 'Fruits and Veggies'
      },
      {
        id: 3,
        name: 'Condiments'
      },
      {
        id: 4,
        name: 'Eggs'
      },
      {
        id: 5,
        name: 'Others'
      }
    ],
  },
  bindPickerChange: function (e) {
    console.log('picker has been used, the choice is', e)
    let index = e.detail.value
    console.log(this.data.array[index])

    this.setData({
      index: index,
      foodItemName: this.data.array[index]
    })
  },

  // New Food Submission
  submit: function (e) {
    //...
    console.log('data', e)
    // let existingFood = getApp().globalData.foods
    console.log(e.detail.value)

    let name = e.detail.value.name;
    let category = this.data.foodItemName;
    let purchase_date = e.detail.value.purchase_date;

    // let status = e.detail.value.purchase_date;
    // let shelf_life = e.detail.value.shelf_life;
    
    let food = {
      name: name,
      // status: status,
      // shelf_life: shelf_life,
      tag_list: category,
      purchase_date: purchase_date,
      user_id: getApp().globalData.userId
    }
    wx.request({
      url: getApp().globalData.host + `/api/v1/foods`,
      method: 'POST',
      data: { food: food },
      success(res) {
        console.log(res)
        // redirect to index page when done
        // wx.navigateTo({
        //   url: '/pages/fridge/fridge'
        // })
      }
    })
  },
    // existingFood.push(food)
    // console.log("checking again appid", existingFood)
    // let currentFoods = this.data.foods;
    // this.setData({
    //   foods: [...currentFoods, food]

    // Post data to API
    // wx.request({
      // url: `https://coffee-in-xalabam.herokuapp.com/api/v1/coupons`,
      // url: getApp().globalData.host + `/api/v1/foods`,
      // method: 'POST',
      // data: { food: food },
      // }
    // })

  /**
   * Lifecycle function--Called when page load
   */

  //  make route in rails for all tags, call API to get these tags
  onLoad: function (options) {
    const page = this
    wx.request({
      url: getApp().globalData.host + `/api/v1/taglist`,
      success: function(response) {
        // console.log(response.data[0].name)
        const tags = response.data
        page.setData({ tags })
      }
    })
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