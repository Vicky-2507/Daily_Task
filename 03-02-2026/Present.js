let numbers = [1, 2, 3, 4, 5, 6];
let target = 10;
let flag = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == target) {
        console.log("present " + i);
        flag = 0;
        break;
    }
    else {
        flag++;
        continue
    }
}
if (flag > 0) {
    console.log("not present")
}
