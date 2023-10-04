
// 对象的访问器属性
// Configurable：属性是否可配置，比如是否可用 delete 删除属性
// Enumerable：属性是否可枚举，可枚举可被 for-in 遍历
// Get：获取函数，在读取属性时调用。
// Set：设置函数，在写入属性时调用。

let book = {
    year_: 2017,
    edition: 1
};

// Object.defineProperty 定义单个属性

Object.defineProperty(book, "year", {
    get () {
        return this.year_;
    },
    set (newValue) {
        if (newValue > 2017) {
            this.year_ = newValue;
            this.edition += newValue - 2017;
        }
    }
});

console.log(book.year + " edition " + book.edition);
book.year = 2018;
console.log(book.year + " edition " + book.edition);

// Object.defineProperties 定义多个属性

let book2 = {};
Object.defineProperties(book2, {
    year_: {
        value: 2017,
        writable: true
    },
    
    edition: {
        value: 1,
        writable: true
    },

    year: {
        get() {
            return this.year_;
        },

        set(newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        }
    }
});

console.log(book2.year + " edition " + book2.edition);
book2.year = 2018;
console.log(book2.year + " edition " + book2.edition);
console.log(Object.getOwnPropertyDescriptors(book2));