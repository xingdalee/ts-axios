/*
 * @Author: lixingda 
 * @Desc: 定义一个接口 
 * @Date: 2019-07-09 16:41:04 
 * @Last Modified by:   lixingda 
 * @Last Modified time: 2019-07-09 16:41:04 
 */
interface LableValue {
  lable: string;
}

const setLable = (lableObj: LableValue) => {
  console.log(lableObj.lable);
};

setLable({ lable: "haha"});
