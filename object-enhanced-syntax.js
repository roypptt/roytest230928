// 增强的对象语法
// ES6 为定义和操作对象新增了很多极其有用的语法糖特性。

// 简写属性名只要使用变量名就会自动被解释为同名的属性键。

let name1 = "Matt";
let person = { name1 };
console.log(person.name1);

// 可计算属性

const nameKey = 'name';
const ageKey = 'age';
const jobKey = 'job';

let person2 = {
    [nameKey]: 'Matt',
    [ageKey]: 27,
    [jobKey]: 'Software engineer'
};

console.log(person2);

// 简写方法名与可计算属性兼容

const methodKey = 'sayName';

let person3 = {
    [methodKey](name) {
        console.log(`My name is ${name}`);
    }
}

person3.sayName('Matt');