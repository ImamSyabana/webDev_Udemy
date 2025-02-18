// jawaban sendiri

// var fizzList = [];
// fizzList.push(1)
// function fizzBuzz(){
//     fizzList.push(fizzList[fizzList.length -1] + 1);
    
//     return console.log(fizzList);
    
// }

// solution
var fizzList = [];
counter = 1;

function fizzBuzz(){
    if (counter % 5 === 0 && counter % 3 === 0){
        fizzList.push("FizzBuzz");
    }
    else if (counter % 5 === 0){
        fizzList.push("Buzz");
    }
    else if (counter % 3 === 0){
        fizzList.push("Fizz");
    }
    else{
        fizzList.push(counter);
    }
    
    counter = counter + 1;
    
    return console.log(fizzList);
    
}

while (counter <= 100){
    fizzBuzz()
    
}