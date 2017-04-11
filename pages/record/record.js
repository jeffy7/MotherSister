// pages/record/record.js
var util = require('../../utils/util.js')
var app = getApp()
var pageData = {
  iscome:0,
  days:'',
  willDays:'',
}


Page({
  data:{
    descLabel: '小姨妈来了',
    userInfo:{},
    dateStartValue:'',
    dateEndValue:'',
    dateValue: util.formatNormalTime(new Date()),
    iscome111:0,
  },

  onLoad:function(options){
    //是否来小姨妈
    pageData.iscome = app.globalData.userData.iscome

    if(app.globalData.userData.iscome == '1'){
      //如果来了小姨妈，picker的开始时间应该从记录开始的时间取
      pageData.dateStartValue = app.globalData.userData.starttime,
      pageData.dateEndValue = '2018-01-01'
    }else {
      //没有来小姨妈，开始时间与结束时间随便设置
      pageData.dateStartValue = '2015-01-01',
      pageData.dateEndValue = '2018-01-01'
    }
    //来了多少天
    pageData.days = util.forComeDays(new Date())
    //预计还有多少天来
    pageData.willDays = util.forComeDays(new Date())

    this.setData(pageData)
   
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
      dateValue: e.detail.value
    })
//     console.log( e.detail.value)
//     var stringTime = e.detail.value;
// var timestamp2 = Date.parse(new Date(stringTime));
// //2014-07-10 10:21:12的时间戳为：1404958872 
// console.log(stringTime + "的时间戳为：" + timestamp2);
// var date =  new Date(timestamp2)
// var year = date.getFullYear()
//   var month = date.getMonth() + 1
//   var day = date.getDate()
// console.log("yyyy" + year);
// console.log("mm" + month);
// console.log("dd" + day);

    var userData = wx.getStorageSync('userData')
    if(pageData.iscome){
      //设置结束时间
      this.setData({
        dateStartValue: e.detail.value
      })
      pageData.iscome = 0
      //记录一条数据 并且记住结束状态
      userData.iscome = 0
      userData.endtime = e.detail.value

      var records = wx.getStorageSync('records') || []
      records.unshift(userData.starttime+'       '+userData.endtime)
      wx.setStorageSync('records', records)

      //清除暂存的数据
      userData.starttime = ''
      //userData.endtime = ''  ,endtime 不应该删除，要计算离下一次大姨妈还有多长时间
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