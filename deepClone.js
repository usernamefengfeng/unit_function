/* 
  对数据进行深拷贝
*/
// 深克隆不考虑函数
let deepClone = function (obj, result) {
  let result = result || {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== {}) {
        if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
          // 对象
          result[key] = {}
        } else {
          // 数组
          result[key] = []
        }
        deepClone(obj[key], result[key])
      } else {
        // 原始值或function
        result[key] = obj[key]
      }
    }
  }
  return result
}

// 深浅拷贝是针对引用值
let deepClone1 = function (target) {
  if (typeof target !== 'object') return target
  let result
  if (Object.prototype.toString.call(target) === '[object Array]') {
    result = []
  } else {
    result = {}
  }
  for (const key in target) {
    if (Object.hasOwnProperty(key)) {
      result[key] = deepClone1(target[key])
    }
  }
  return result
}

// 这种JSON方式无法深拷贝函数
let deepClone2 = JSON.parse(JSON.stringify(target))