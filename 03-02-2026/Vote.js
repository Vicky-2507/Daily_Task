function canVote(age) {
    if (age >= 18) {
        return "You are eligible to vote.";
    } else {
        return "You are not eligible to vote.";
    }
}
console.log(canVote(20));
console.log(canVote(16));