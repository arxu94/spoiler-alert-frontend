// pages/suggestions/suggestions.js
Page({

  /**
   * Page initial data
   */
  data: {
    //滑动获取选中商品

  getSelectItem:function(e){

    let that = this;

    let itemWidth = e.detail.scrollWidth / that.data.food.length;//每个商品的宽度

    let scrollLeft = e.detail.scrollLeft;//滚动宽度

    let curIndex = Math.round(scrollLeft / itemWidth);//通过Math.round方法对滚动大于一半的位置进行进位

    for (let i = 0, len = that.data.food.length; i < len; ++i) {

        that.data.proList[i].selected = false;

    }

    that.data.proList[curIndex].selected = true;

    that.setData({

        foods: getApp().globalData.foods

        // giftNo: this.data.food[curIndex].id

    });
  }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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