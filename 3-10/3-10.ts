/*
 * @Author: lixingda
 * @Desc: 接口 - 可选属性+只读属性
 * @Date: 2019-07-09 16:41:40
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-07-09 17:05:50
 */
interface Square {
  color: string;
  area: number;
}
// 可选属性的好处1：对属性预定义
interface SquareConfig {
  color?: string;
  width?: number;
}
/**
 * 可选属性
 * @param config
 */
const createSquare = (config: SquareConfig): Square => {
  // 可选属性要判断
  let newSquare = { color: "red", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  // 可选属性的好处2：假如width拼写错误，能马上发现
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
};
console.log("可选属性:", createSquare({ color: "while", width: 9 }));

/**
 * 只读属性 示例1
 */
interface Point {
  readonly x: number;
  readonly y: number;
}
let pi: Point = { x: 12, y: 13 };
// pi.x = 1; // 不能被修改

/**
 * 只读属性 示例2
 */
let a: number[] = [1, 2, 3, 4];
// 泛型只读数组
let ro: ReadonlyArray<number> = a;

// ro[0] = 12; // 不能被修改
