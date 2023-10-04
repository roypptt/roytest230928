// 对象原型 prototype
// 所有 JavaScript 对象都从原型继承属性和方法。
// 日期对象继承自 Date.prototype。数组对象继承自 Array.prototype。
// Person 对象继承自 Person.prototype。
// 日期对象、数组对象和 Person 对象都继承自 Object.prototype。
// 请只修改自定义对象的原型。绝不要修改标准 JavaScript 对象的原型。

function Person(firstName, lastName, age, eyes) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyes = eyes;
}

let myFather = new Person("Bill", "Gates", 62, "blue");

// prototype 属性允许您为对象构造器添加新属性和方法。
// prototype 属性允许给所有给定类型的已有对象添加新属性或方法。

Person.prototype.nationality = "English";
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
}

let myMother = new Person("Steve", "Jobs", 56, "green");
console.log(myMother.name());
console.log(myMother.nationality);
console.log(myFather.nationality);