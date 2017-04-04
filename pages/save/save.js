// pages/save/save.js
var userDays = {
  days : '44'
}

Page({
  data:{
    array: ['1','2','3','4','5','6','7','8','9','10',
            '11','12','13','14','15','16','17','18','19','20',
            '21','22','23','24','25','26','27','28','29','30',
            '31','32','33','34','35','36','37','38','39','40',
            '41','42','43','44','45','46','47','48','49','50',
            ],
    index:0,//没有用
    days:'',
    
  },
  
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var userData = wx.getStorageSync('userData')
    this.setData({
      days:userData.days
    })
  },
  bindPickerChange: function(e) {
    var daysnum = parseInt(e.detail.value);
        console.log('num', daysnum)

    daysnum = daysnum +1
            console.log('num + 1', daysnum)

    var daysStr = daysnum.toString();
            console.log('str', daysStr)

    this.setData({
      days:daysStr
    })
    console.log('picker发送选择改变，携带值为', daysStr)
  },
  saveButton:function(){
    var userData = wx.getStorageSync('userData')
    userData.days = this.data.days
    wx.setStorageSync('userData', userData)
    
    wx.showToast({
      title: "保存成功",
      duration: 1000
    })
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