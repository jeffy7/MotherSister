// pages/record/record.js
var app = getApp()
var pageData = {
  iscome:0,
  days:'',
}

Page({
  data:{
    descLabel: '小姨妈来了',
    userInfo:{},
    date: '2016-09-01',
    iscome111:0,
  },
  

  onLoad:function(options){
    pageData.iscome = app.globalData.userData.iscome
    pageData.days = app.globalData.userData.days
    this.setData(pageData)
    // this.setData({
    //   iscome111:iscome,
    //   days:days,
    // })
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      console.log(userInfo)
      that.setData({
        userInfo:userInfo
      })

    })
  },
 
  // datapicker
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
    console.log( e.detail.value)
    var stringTime = e.detail.value;
var timestamp2 = Date.parse(new Date(stringTime));
//2014-07-10 10:21:12的时间戳为：1404958872 
console.log(stringTime + "的时间戳为：" + timestamp2);
var date =  new Date(timestamp2)
var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
console.log("yyyy" + year);
console.log("mm" + month);
console.log("dd" + day);

    var userData = wx.getStorageSync('userData')
    if(pageData.iscome){
      pageData.iscome = 0
      //记录一条数据 并且记住结束状态
      userData.iscome = 0
      userData.endtime = e.detail.value

      var records = wx.getStorageSync('records') || []
      records.unshift(userData.starttime+'       '+userData.endtime)
      wx.setStorageSync('records', records)

      //清除暂存的数据
      userData.starttime = ''
      userData.endtime = ''
    }else {
      pageData.iscome = 1
      //记录开始的时间 并且记住开始状态
      userData.iscome = 1
      userData.starttime = e.detail.value
    }
    wx.setStorageSync('userData', userData)
    this.setData(pageData)

  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})