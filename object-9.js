
// Object literal notation
let user1 = {
    name: 'Taylor',
    point: 5,
    incerment: function() {
        user1.point++;
    }
};

user1.incerment();
console.log(user1.name, user1.point);


// Object.create(proto, [ propertiesObject ])
let user2 = Object.create(null);
user2.name = 'cam';
user2.point = 5;
user2.incerment = function() {
    user2.point++;
};

user2.incerment();
console.log(user2.name, user2.point);


// Using a function
function createUser(name, points) {
    let newUser = {};
    newUser.name = name;
    newUser.points = points;
    newUser.incerment = function() {
        newUser.points++;
    };
    return newUser;
}

let user3 = createUser('Bob', 5);
user3.incerment()
console.log(user3.name, user3.points);
console.log(user3.__proto__ === Object.protorype);


// Use the prototype and function
function createUser2(name, points) {
    let newUser = Object.create(userFunction);
    newUser.name = name;
    newUser.points = points;
    return newUser;
}

let userFunction = {
    incerment: function() {this.points++}
}

let user4 = createUser2("Musk", 5);
user4.incerment();
console.log(user4.name, user4.points);


// New and this keywords
function User(name, points) {
    this.name = name;
    this.points = points;
}

User.prototype.incerment = function() {
    this.points++;
}

let user5 = new User("Dylan", 6);
user5.incerment();
console.log(user5.name, user5.points);