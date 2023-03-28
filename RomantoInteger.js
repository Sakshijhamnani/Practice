 function romanToInt(s) {
    const myMap={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let result=0;
    for(let i=0;i<s.length;i++){      //IV    curr=I   next=V  
        const curr=myMap[s[i]];
        const next=myMap[s[i+1]];
        if(curr<next){
            result+=next-curr;
            i++
        }
        else{
            result+=curr
        }
    }
    return result;
};

const val="IV"
let result=romanToInt(val)
console.log(result);
