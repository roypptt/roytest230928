// 可迭代对象
let arr = ['aaa', 'bbb'];

// 迭代器工厂函数
console.log(arr[Symbol.iterator]);

// 调用工厂函数生成一个迭代器，绑定一个可迭代对象
let iter = arr[Symbol.iterator]();
console.log(iter);

// 执行迭代
console.log(iter.next());

// 修改可迭代对象
arr.splice(1, 0, 'ccc');

// 迭代可反应修改后的内容
console.log(iter.next());
console.log(iter.next());

// 迭代到 done: true 后续调用next() 就一直返回同样的值
console.log(iter.next());
arr.splice(3, 0, 'ddd');
console.log(iter.next());

// 一个显式的迭代器实现
// 调用默认的迭代器工厂函数会返回
// 一个实现迭代器接口（Iterator）的迭代器对象
class foo {
    [Symbol.iterator]() {
        return {
            next() {
                return { done: false, value: 'foo'};
            }
        }
    }
}

let f = new foo();
// 打印出实现了迭代器接口的对象
console.log(f[Symbol.iterator]());

// Array 类型实现了可迭代接口（Iterable）
// 调用 Array 类型的默认迭代器工厂函数
// 会创建一个 ArrayIterator 的实例
let a = new Array();
console.log(a[Symbol.iterator]());