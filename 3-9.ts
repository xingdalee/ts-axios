interface LableValue {
  lable: string;
}

const setLable = (lableObj: LableValue) => {
  console.log(lableObj.lable);
};

setLable({ lable: "haha"});
