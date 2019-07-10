/*
 * @Author: lixingda
 * @Desc: 接口 -可索引的类型
 * @Date: 2019-07-10 13:50:11
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-07-10 13:53:45
 */
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray = ["Bob", "Fred"];
let myStr: string = myArray[0];
console.log(myStr)