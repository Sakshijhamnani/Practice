function lengthOfLastWord(s) {
    let words=s.trim().split(" ")
    
    return words.length>0 ? words[words.length-1].length:0
};

const val=" Hello World "
let result=lengthOfLastWord(val)
console.log(result);