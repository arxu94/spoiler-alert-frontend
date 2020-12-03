// pages/suggestions/suggestions.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    array: [{title: "Chocolate Cakedsdsdsdssdsdsdsd", url: "https://tse3-mm.cn.bing.net/th/id/OIP.1L8gCwTABU3YDcOx_aIy8gHaLH?w=200&h=300&c=7&o=5&dpr=1.5&pid=1.7"},{title: "Three Beans Salad", url: "https://tse2-mm.cn.bing.net/th/id/OIP.YnxA6KjU-UiVknSmPFYcQQHaLH?w=200&h=300&c=7&o=5&dpr=1.5&pid=1.7"},{title: "Three Beans Salad", url: "https://tse2-mm.cn.bing.net/th/id/OIP.YnxA6KjU-UiVknSmPFYcQQHaLH?w=200&h=300&c=7&o=5&dpr=1.5&pid=1.7"}]
  },
    getSelectItem:function(e){
      var that = this;
      var itemWidth = e.detail.scrollWidth / that.data.array.length;//每个商品的宽度
      var scrollLeft = e.detail.scrollLeft;//滚动宽度
      var curIndex = Math.round(scrollLeft / itemWidth);//通过Math.round方法对滚动大于一半的位置进行进位
      for (var i = 0, len = that.data.array.length; i < len; ++i) {
          that.data.array[i].selected = false;
      }
      that.data.array[curIndex].selected = true;
      that.setData({
          array: that.data.array,
          giftNo: this.data.array[curIndex].id
      });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this;
	

    // Get api data
    wx.request({
      // url: "http://localhost:3000/api/v1/stories",
      method: 'GET',
      success(res) {
        const stories = res.data.stories;

        // Update local data
        page.setData({
          stories: stories
        });

        wx.hideToast();
      }
    });
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