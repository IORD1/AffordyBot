

var totalAmount  = 12000;
var downpayment = 1000;
var months = 9;
var pricePerMonth = 1200;
var restOfAmount;
var intrest = 10;
var amountAfterIntrest ;
var months;
var salary;
salary = 10000;

function calculate(){
    restOfAmount = totalAmount - downpayment;
    amountAfterIntrest = restOfAmount + ((restOfAmount*intrest)/100);
    console.log("Amount After Interest : " + amountAfterIntrest);
    console.log("You require to Pay : " + ((restOfAmount*intrest)/100) + ' Extra');
}

function pricePermonth(months){
    calculate();
    pricePerMonth = amountAfterIntrest/months;
    if(pricePerMonth > (0.15*salary)){
        console.log("Not Beneficial");
        console.log('Final Amount per month : ' + pricePerMonth);
    }else{
        console.log("Beneficial");
        console.log('Final Amount per month : ' + pricePerMonth);
    }
}


function monthsOnPrice(pricePerMonth){
    calculate();
    months = amountAfterIntrest/pricePerMonth;
    if(months > 24){
        console.log("Not Beneficial");
        console.log("Months required : " + months);
    }else{
        console.log("Beneficial");
        console.log("Months required : " + months);
    }

}


function soShalI(){
    
}
monthsOnPrice();