/*
 * @Author: lixingda
 * @Desc: 接口 - 额外属性检查+函数类型+可索引的类型
 * @Date: 2019-07-09 17:08:17
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-07-10 13:37:03
 */
// 额外属性检查
interface Square {
  color: string;
  area: number;
}
// 可选属性的好处1：对属性预定义
interface SquareConfig {
  color?: string;
  width?: number;
  // 索引签名参数(当不确定传入的对象是否有其他参数时使用，否则传入其他的属性，ts会进行额外属性检查报错)
  [otherKey: string]: any;
}
/**
 * 可选属性
 * @param config
 */
function createSquare2(config: SquareConfig): Square {
  let newSquare = { color: "white", area: 100 };
  if (config.clor) {
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    newSquare.color = config.clor;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

console.log("可选属性:", createSquare2({ color: "black", width: 9 }));
