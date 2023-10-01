function selectFrom(lowerValue, upperValue) {
    let choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}

let colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"];
console.log(colors[selectFrom(0, colors.length-1)])