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
    console.log('onLoad99999999999')
    this.setData({
      date: e.detail.value
    })
    console.log( e.detail.value)

    if(pageData.iscome){
      pageData.iscome = 0
    }else {
      pageData.iscome = 1
    }
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