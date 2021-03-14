/* 
  数组去重
*/
let uniqeArr1 = function (arr) {
  return [...new Set(arr)]
}

let uniqeArr2 = function (arr) {
  let obj = {}
  return arr.filter(ele => {
    if (!obj[ele]) {
      obj[ele] = true
      return true
    }
  })
}

let uniqeArr3 = function (arr) {
  let result = []
  arr.forEach(ele => {
    if (result.indexOf(ele) === -1) {
      result.push(ele)
    }
  })
  return result
}