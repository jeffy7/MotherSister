function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//计算滚轮的最早开始时间 
//预留功能：开始时间不一定要是当天，可以是之前的时间，例如忘记了开始
function forPickerStartTime(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// 结束时间可以是以前的时间，例如补充一段时间，单结束时间一定不超过当前时间
//计算滚轮的最早开始时间
function forPickerEndTime(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//计算小姨妈来了是第几天
function forComeNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//计算预计还有多少天来小姨妈
function forWillComeNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
module.exports = {
  formatTime: formatTime
}
