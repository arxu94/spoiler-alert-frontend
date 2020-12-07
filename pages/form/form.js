// pages/form/form.js
Page({

  /**
   * Page initial data
   */
  data: {
    // array: ['Meat and Fish', 'Dairy', 'Fruits and Veggies', 'Condiments', 'Eggs', 'Others'],
    selectedFoodIndex: 0,
    categories: {
      active: 0,
      array: [{name: 'Meat and Fish', image: '/images/meat-icon.png'}, {name: 'Dairy', image: '/images/dairy-icon.png'}, {name: 'Fruits and Veggies', image: '/images/banana-icon.png'}, {name: 'Condiments', image: '/images/sauces-icon.png'}, {name: 'Eggs', image: '/images/eggs-icon.png'}, {name: 'Others'}]
    }
  },

  bindPickerChange: function (e) {
    console.log('picker has been used, the choice is', e)
    let index = e.detail.value
    console.log(this.data.array[index])

    this.setData({
      index: index,
      foodItemName: this.data.array[index],
    })
  },

  bindDateChange: function (e) {
    console.log('Picker is being used, the date is', e.detail.value)
    this.setData({
      purchase_date: e.detail.value
    })
  },

  toggleActiveCategory: function (e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      "categories.active": index
    })
  },
  // New Food Submission
  submit: function (e) {
    //...
    console.log('data', e)
    let name = e.detail.value.name;
    let category = this.data.categories.array[this.data.categories.active];
    let purchase_date = this.data.purchase_date;

    let food = {
      name: name,
      tag_list: category,
      purchase_date: purchase_date,
      user_id: getApp().globalData.userId
    }

    console.log("checking post api", food)

    wx.request({
      url: getApp().globalData.host + `api/v1/foods`,
      method: 'POST',
      data: { food: food },
      success(res) {
        console.log(res)
        // redirect to index page when done
        wx.navigateTo({
          url: '/pages/fridge/fridge'
        })
      }
    })
  },

  anything: function(){
    wx.scanCode({
      success (res) {
        console.log(res)
        const barcode = res.result
        wx.request({
          url: `https://mxnzp.com/api/barcode/goods/details?barcode=${barcode}&app_id=zlcwkesmllkgvjbm&app_secret=NHlrMTd5c3JLYzU4M0dsTjl5YVp6UT09`,
          success(res){
            console.log(res.data.data)
            // console.log(res.data.data.goodsName)
            // console.log(res.data.data.brand)
            const cn_item = res.data.data.goodsName
            const cn_brand = res.data.data.brand
            const item = (cn_item.split(`${cn_brand}`)).join("")
            console.log(item)
              wx.request({
                url: `http://fanyi.youdao.com/translate?&doctype=json&type=AUTO&i=${item}`,
                success(res){
                  console.log(res.data.translateResult[0][0].tgt)
                }
              })
          }
        })
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
    let year =  new Date(Date.now()).getFullYear()
    let month = new Date(Date.now()).getMonth()
    let date = new Date(Date.now()).getDate()
    page.setData({
      purchase_date: `${year}-${month}-${date}`
    })
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