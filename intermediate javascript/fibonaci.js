function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        if (n === 1){
            var fibbonacciList = [];
            fibbonacciList.push(0);
        }
        else if (n === 2){
            var fibbonacciList = [];
            fibbonacciList.push(0);
            fibbonacciList.push(1);
        }
        else if (n > 2){
            var fibbonacciList = [];
            fibbonacciList.push(0);
            fibbonacciList.push(1);
    
            for (var i = 2; i < n; i ++){
                fibbonacciList.push((fibbonacciList[fibbonacciList.length -1]) + (fibbonacciList[fibbonacciList.length -2]));
            }
        }
    
        else if (n < 1){
            alert("Please add a number greater than 0");
        }
        return fibbonacciList; //return statements;
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        //dsad
    //Do NOT Change Any of the code below 👇
    }
    
    