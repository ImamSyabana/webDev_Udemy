function bmiCalculator (weight, height) {
    var bmiScore = (weight / (Math.pow(height, 2)));
    var interpretation = "";
    if (bmiScore < 18.5){
        interpretation = ("Your BMI is "+ bmiScore +", so you are underweight.");
    }
    else if (bmiScore >= 18.5 && bmiScore <= 24.9){
        interpretation = ("Your BMI is "+ bmiScore +", so you have a normal weight.");
    }
    else if (bmiScore > 24.9){
        interpretation = ("Your BMI is "+ bmiScore +", so you are overweight.");
    }
    return interpretation;
}