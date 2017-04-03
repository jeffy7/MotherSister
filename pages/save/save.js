// pages/save/save.js
var userDays = {
  days : '44'
}
// var array
// var index

Page({
  data:{
    array: ['1','2','3','4','5','6','7','8','9','10',
            '11','12','13','14','15','16','17','18','19','20',
            '21','22','23','24','25','26','27','28','29','30',
            '31','32','33','34','35','36','37','38','39','40',
            '41','42','43','44','45','46','47','48','49','50',
            ],
    index:29,
    userDays,
    
  },
  
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var saveIndex;
  },
  bindPickerChange: function(e) {
    
    this.setData({
      index:e.detail.value
    })
    console.log('picker发送选择改变，携带值为', e.detail.value)

    // this.setData({
    //   array: this.data.array
    // })

    // console.log(array)

    // this.setData({
    //   days: this.data.array[index]
    // })
  },
  saveButton:function(){
    // wx.setStorageSync('days',index)
    console.log(userDays.days)


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