// 可选属性
var createSquare = function (config) {
    // 可选属性要判断
    var newSquare = { color: "red", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    // 可选属性的好处2：假如width拼写错误，能马上发现
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
};
console.log(createSquare({ color: "while", width: 9 }));
