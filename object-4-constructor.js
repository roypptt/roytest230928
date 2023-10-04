// 对象构造器
// 有时我们需要创建相同“类型”的许多对象的“蓝图”
// 创建一种“对象类型”的方法，是使用对象构造器函数。
// 通过 new 关键词调用构造器函数可以创建相同类型的对象。

// this 是代码的“拥有者”
// this 的值，在对象中使用，就是对象本身。
// 在构造器函数中，this 是没有值的。它是新对象的替代物。
// 当一个对象被创建，this 的值就会成为这个新对象。
// 请注意 this 并不是变量。它是关键词。无法改变 this 的值。

// 创建名为 Person 的对象构造器

function Person(firstName, lastName, age, eyes) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyes = eyes;
}

let myFather = new Person("Bill", "Gates", 62, "Blue");
let myMother = new Person("Steve", "Jobs", 56, "Green");

console.log(myFather);
console.log(myMother);

// ---

// 为已有对象添加属性

myFather.nationality = "English";
console.log(myFather);

// 为已有对象添加方法

myMother.name = function() {
    return this.firstName + " " + this.lastName;
}

// 无法为对象构造器添加新属性或方法

Person.nationality = "English";
console.log(myMother);

// 如需向构造器添加一个新属性或方法，则必须把它添加到构造器函数：

// ---