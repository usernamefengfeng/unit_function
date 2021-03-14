/* 
  @params {data} 当前参数数据
  返回数据类型字符串
 */
let returnDataType = function (data) {
  return Object.prototype.toString.call(data)
}