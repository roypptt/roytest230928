// Getter 和 Setter 允许您定义对象访问器（被计算的属性）。
// 为什么使用 Geter 和 Seter
// - 它提供了更简洁的语法
// - 它允许属性和方法的语法相同 
// - 它可以确保更好的数据质量
// - 有利于后台工作

// 例1 计数器对象
// 以函数形式访问 obj.fuction()
// 以属性形式访问 obj.property

let obj = {
    conter: 0,
    reset: function () {
        this.conter = 0;
    },
    get increment() {
        this.conter++;
    },
    get decrement() {
        this.conter--;
    },
    set add(value) {
        this.conter += value;
    },
    set subtract(value) {
        this.conter -= value;
    }
};

obj.reset();
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
console.log(obj.conter)

// 例2 使用 get 属性
// 以大写形式返回 language 属性值，确保更好的数据质量。

let person = {
    firstName: 'Bill',
    lastName: 'Gates',
    language: 'en',
    get lang() {
        return this.language.toUpperCase();
    }
};

console.log(person['language']);
console.log(person.lang);