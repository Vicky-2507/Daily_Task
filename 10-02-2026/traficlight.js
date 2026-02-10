function trafficLight(currentcolor, action){
    switch (action) {
        case "next":
    switch (currentcolor){
        case "red":
            return "green";
        case "green": 
            return "yellow";
        case "yellow":
            return "red"
        default:
            return "Invalid color"
    }
        case "time":
    switch (currentcolor){
        case "red":
            return 30;
        case "green":
            return 40;
        case "yellow":
            return 5;
        default:
        return "Invalid Color"
        }
        default:
        return "invalid action"
    }
}
console.log(trafficLight('red', 'next')); // 'green'
console.log(trafficLight('red', 'time')); // 30 (seconds)
console.log(trafficLight('yellow', 'next')); // 'red'
console.log(trafficLight('green', 'time')); // 45 (seconds)git a