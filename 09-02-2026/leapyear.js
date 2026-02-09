function LeapYear(year) {
    if ((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)) {
        return "True"
    }
    else {
        return "False"
    }
}
console.log(LeapYear(2024
));
console.log(LeapYear(1900));
console.log(LeapYear(2028));


