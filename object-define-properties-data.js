
// 对象的数据属性
// Configurable：属性是否可配置，比如是否可用 delete 删除属性
// Enumerable：属性是否可枚举，可枚举可被 for-in 遍历
// Writable：属性值是否可更改
// Value：属性实际的值

// 使用字面量方式创建对象，近几年更流行

let person = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName () {
        console.log(this.name);
    }
};

// 设置对象的属性（writable）为不可修改

let person2 = {};
Object.defineProperty(person2, "name", {
    writable: false,
    value: "Nicholas"
});

console.log(person2.name);
person2.name = "Greg";
console.log(person2.name);

// 设置对象的属性（configurable）为不可修改
// 设置对象的属性（enumerable）为可被 for-in 遍历

let person3 = {};
Object.defineProperty(person3, "name", {
    configurable: false,
    enumerable: true,
    value: "Nicholas"
});

console.log(person3.name);
delete person3.name;
console.log(person3.name);

for (const prop in person3) {
    console.log('obj.' + prop + ' = ' + person3[prop]);
}