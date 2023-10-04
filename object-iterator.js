// 可迭代对象
// 可迭代对象（Iterables）是可以使用 for...of 进行迭代的对象
// 从技术上讲，可迭代对象必须实现 Symbol.iterator 方法

// 迭代器
// 迭代器协议定义了如何从一个对象中生成一系列的值。
// JavaScript 可迭代对象是具有 Symbol.iterator 属性的对象
// Symbol.iterator 是一个返回 next() 函数的函数。
// next() 方法必须返回一个带有两个属性的对象。
// - value（下一个值）
// - done（true 或 false）如果迭代器已经完成，则返回 true
// Symbol.iterator 方法会被 for...of 自动调用。

let myNumber = {};
myNumber[Symbol.iterator] = function() {
    let n = 0;
    let done = false;
    return {
        next() {
            n += 10;
            if (n == 100) {done = true}
            return {value: n, done: done};
        }
    };
}

for (const num of myNumber) {
    console.log(num);
}

// 也可以手动调用迭代器（非必要）

let iterator = myNumber[Symbol.iterator]();
while (true) {
    const result = iterator.next()
    if (result.done) break;

    console.log(result.value);
}