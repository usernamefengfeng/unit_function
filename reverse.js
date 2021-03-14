/* 
  自定义实现数组的反转方法
  改变原数组
*/
let arr = [1,2,3,4,5,6,7,8,9,0]
Array.prototype.myReverse = function () {
  let len = this.length
  for (let i = 0; i < len; i++) {
    let temp = this[i]
    this[i] = this[len - 1 - i]
    this[len - 1 - i] = temp
  }
  return this
}
console.log('my array reverse ==', arr.myReverse())