// arguments 是一个类似数组的对象
// 可在函数内部访问，其中包含传递给该函数的参数值。

function getArgsArray() {
    return Array.from(arguments);
   }
console.log(getArgsArray(1, 2, 3, 4)); // [1, 2, 3, 4] 

