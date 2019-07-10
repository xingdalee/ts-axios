/*
 * @Author: lixingda 
 * @Desc: 接口 -函数类型
 * @Date: 2019-07-10 13:49:45 
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-07-10 13:50:29
 */

/**
 * 函数类型的定义，定义一个符合当前业务规范的函数，如果函数的入参或者return的数据类型不对，将会报错
 */
interface SearchFunc {
  // 意思是：定义两个形参的类型是string，函数return的类型是布尔值
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
