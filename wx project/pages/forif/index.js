Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMe:true,
    length:3,
    arr1:[
      {name:"item 1"},
      {name:"item 2"}
    ],
    objectArray:[
      {id:5, unique:"unique_5"},
      { id: 4, unique: "unique_4" },
      { id: 3, unique: "unique_3" },
      { id: 2, unique: "unique_2" },
      { id: 1, unique: "unique_1" },
      { id: 0, unique: "unique_0" },
      
    ],
    numberArray: [1, 2, 3, 4]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})