// pages/record/record.js
var app = getApp()

Page({
  data:{
    descLabel: '小姨妈来了',
    userInfo:{},
    date: '2016-09-01',

  },
  onLoad:function(options){
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
  //first method
  toDetail:function(){
    

  },
  // datapicker
  bindDateChange: function(e) {
    console.log('onLoad99999999999')
    this.setData({
      date: e.detail.value
    })


      console.log( e.detail.value)
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