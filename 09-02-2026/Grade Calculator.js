function getGrade(score) {
    if ((score>=90) && (score<=100)){
        return "A Grade "
    }
    else if ((score>=80) && (score<=89)){
        return "B Grade"
    }
     else if ((score>=70) && (score<=79)){
        return "C Grade"
    }
     else if ((score>=60) && (score<=69)){
        return "D Grade"
    }
     else if ((score>=0) && (score<=60)){
        return "F Grade"
    }
   else {
       return "Invalid inputs"
   }
}
console.log(getGrade(110))


