

var totalAmount  = 12000;
var downpayment = 1000;
var months = 9;
var pricePerMonth = 0;
var restOfAmount;
var intrest = 10;
var amountAfterIntrest ;
var months = 0;
var salary;
salary = 10000;

$("display").html('');

// $("#display").append(linkeditdelete);


function calculate(){
    restOfAmount = totalAmount - downpayment;
    amountAfterIntrest = restOfAmount + ((restOfAmount*intrest)/100);
    $("#display").append("Amount After Interest : " + amountAfterIntrest+'+'+downpayment + '<br>');
    $("#display").append("You require to Pay : " + ((restOfAmount*intrest)/100) + ' Extra'+'<br>');
}



function monthsOnPrice(){
    months = amountAfterIntrest/pricePerMonth;
    months = months.toFixed(1);
    if(months > 120){
        $("#display").append("Not Beneficial"+ '<br>');
        $("#display").append("Months required : " + months+', ('+pricePerMonth+'/perMonth)'+  '<br>');
    }else{
        $("#display").append("Beneficial"+ '<br>');
        $("#display").append("Months required : " + months+', ('+pricePerMonth+'/perMonth)'+ '<br>');
    }

}



function invoke(){
    $("display").html('------------------');

    totalAmount = document.getElementById('TotalAmt').value ;
    downpayment = document.getElementById('DownPay').value;
    months = document.getElementById('months').value;
    pricePerMonth = document.getElementById('pricePerMonth').value;
    intrest = document.getElementById('interest').value;
    salary = document.getElementById('salary').value;



    calculate();
    if(months == ''){
        monthsOnPrice();
    }else{
        pricePerMonth = amountAfterIntrest/months;
        pricePerMonth = pricePerMonth.toFixed(2);
        if(pricePerMonth > (0.1*salary)){
            $("#display").append("Not Beneficial" + '<br>');
            $("#display").append('Final Amount per month : ' + pricePerMonth+'<br>');
        }else{
            $("#display").append("Beneficial"+ '<br>');
            $("#display").append('Final Amount per month : ' + pricePerMonth+ '<br>');
        }
    }
}


