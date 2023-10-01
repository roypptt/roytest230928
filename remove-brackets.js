/*
a + (b + c) === a + b + c 加减法去括号法则
a - (b + c) === a - b - c 加减法去括号法则
a * (b + c) === a * b + a * c 乘法分配律
a / (b + c) 不能去括号，除法没有分配律

a + (b - c) === a + b - c
a - (b - c) === a - b + c
a * (b - c) === a * b - a * c 乘法分配律
a / (b - c) 不能去括号，除法没有分配律

a + (b * c) === a + b * c 先乘除再加减 
a - (b * c) === a - b * c 先乘除再加减
a * (b * c) === a * b * c 乘除法去括号法则
a / (b * c) === a / b / c 乘除法去括号法则

a + (b / c) === a + b / c 先乘除再加减
a - (b / c) === a - b / c 先乘除再加减
a * (b / c) === a * b / c 乘除法去括号法则
a / (b / c) === a / b * c 乘除法去括号法则
*/


const [a, b, c] = [2, 3, 4];
console.log(a + (b + c) === a + b + c ? true : false);
console.log(a - (b + c) === a - b - c ? true : false);
console.log(a * (b + c) === a * b + a * c ? true : false);

console.log(a + (b - c) === a + b - c ? true : false);
console.log(a - (b - c) === a - b + c ? true : false);
console.log(a * (b - c) === a * b - a * c ? true : false);

console.log(a + (b * c) === a + b * c ? true : false);
console.log(a - (b * c) === a - b * c ? true : false);
console.log(a * (b * c) === a * b * c ? true : false);
console.log(a / (b * c) === a / b / c ? true : false);

console.log(a + (b / c) === a + b / c ? true : false);
console.log(a - (b / c) === a - b / c ? true : false);
console.log(a * (b / c) === a * b / c ? true : false);
console.log(a / (b / c) === a / b * c ? true : false);