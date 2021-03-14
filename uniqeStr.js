/* 
  给定一个字符串，将这个字符串去重
*/
let str = 'affhsbchafnebiyiaunrfbe'
String.prototype.uniqeStr = function () {
  let obj = {},
      str = '',
      len = this.length
  for (let i = 0; i < len; i++) {
    if (!obj[this[i]]) {
      str += this[i]
      obj[this[i]] = true
    }
    
  }
  return str
}

let uniqeStr = function (string) {
  let obj = {},
      str = '',
      len = string.length
  for (let i = 0; i < len; i++) {
    if (!obj[string.charAt(i)]) {
      str += string.charAt(i)
      obj[string.charAt(i)] = true
    }
    
  }
  return str
}

