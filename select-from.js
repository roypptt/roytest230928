// 在两个数之间随机

function selectFrom(lowerValue, upperValue) {
    let choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}

// 在数组内取随机项

let colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"];
console.log(colors[selectFrom(0, colors.length-1)])