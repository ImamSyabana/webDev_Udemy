var bottleCount = 99;

while (bottleCount >= 0){
    if (bottleCount !== 0){
        console.log(bottleCount + " bottles of beer on the wall, "+ bottleCount + " bottles of beer.");
        console.log("Take one down and pass it around, " + (bottleCount - 1) + " bottles of beere on the wall.");
    }
    else if(bottleCount === 0){
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        
        console.log("Go to the store and but some more, " + (99) + " bottles of beer on the wall.")
    }
    bottleCount = bottleCount - 1;
}