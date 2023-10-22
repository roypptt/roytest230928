var null1 = null;
var undefined1 = undefined;
var string1 = 'foo';
var number1 = Number('10');
var boolean1 = Boolean('true');
var symbol1 = Symbol('foo');
console.log(typeof null1); // object, 需要注意
console.log(typeof undefined1); // undefined
console.log(typeof string1); // string
console.log(typeof number1); // number
console.log(typeof boolean1); // boolean
console.log(typeof symbol1); // symbol

// 引用类型/复杂值
var myString = new String('male');
var myNumber = new Number(23);
var myBoolean = new Boolean(false);
var myObject = new Object();
var myArray = new Array('foo', 'bar');
var myFunction = new Function('x', 'y', 'return x * y');
var myDate = new Date();
var myRegExp = new RegExp('\\bt[a-z]+\\b');
var myError = new Error('error');

console.log(typeof myString); // 输出 object
console.log(typeof myNumber); // 输出 object
console.log(typeof myBoolean); // 输出 object
console.log(typeof myObject); // 输出 object
console.log(typeof myArray); // 输出 object
console.log(typeof myFunction); // 输出 function 需要注意
console.log(typeof myDate); // 输出 object
console.log(typeof myRegExp); // 输出 object
console.log(typeof myError); // 输出 object

function isType(souce) {
    const target = Object.prototype.toString.call(souce);
    switch(target) {
        case "[object Null]":
            return 'null';
        case "[object Undefined]":
            return 'undefined';
        case "[object String]":
            return 'string';
        case "[object Number]":
            return 'number';
        case "[object Object]":
            return 'object';
        case "[object Array]":
            return 'array';
        case "[object Function]":
            return 'function';
        case "[object Date]":
            return 'date';
        case "[object RegExp]":
            return 'regexp';
        case "[object Error]":
            return 'error'
    }
}

console.log(isType(number1));