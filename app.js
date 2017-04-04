//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    console.log(Date.now())
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    //调用API从本地缓存中获取 历史小姨妈 的数据
    // wx.clearStorageSync('records')
    var records = wx.getStorageSync('records') || []
    wx.setStorageSync('records', records)

// wx.clearStorageSync('userData')
    //用户缓存的数据，如 是否设置来了小姨妈，小姨妈的平均周期，未完
    var userData = wx.getStorageSync('userData') || {
      iscome:0,
      days:'29',
      starttime:'',
      endtime:'',

    }

    wx.setStorageSync('userData', userData)
    var that = this
    this.globalData.userData = userData
    console.log( userData)
    console.log( records)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    userData:null,
  }
})