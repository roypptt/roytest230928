// 数组排序
let arr = [5, 1, 10, 0, 15];
console.log(arr.sort());

// 标准的比较函数
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}

// 如果数组元素是数值，或者是其 valueOf() 方法返回数值的对象（如 Date 对象）
// 可以用更简单的比较函数
function compare2(value1, value2) {
    return value2 - value1;
}

console.log(arr.sort(compare));

// 倒序排序并使用箭头函数
arr.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
// 反向排序
console.log(arr.reverse());