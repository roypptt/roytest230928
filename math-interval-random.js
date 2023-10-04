// 在两个数之间随机

function intervalRandom(lowerValue, upperValue) {
    let choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}

// 在数组内取随机项

let colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"];
console.log(colors[intervalRandom(0, colors.length-1)])