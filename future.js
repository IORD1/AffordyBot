var totalAmount;
var downPay;
var months;



totalAmount = 1000;
downPay = 200;
months = 5;
function work(){
    totalAmount = document.getElementById('inputEmail4').value;
    months = document.getElementById('inputPassword4').value;
    downPay = document.getElementById('inputAddress').value;
    var result = (totalAmount-downPay)/months;
     result = result.toFixed(2);
    document.getElementById('result').innerHTML = 'Permont Investment : '+ result;
    console.log((totalAmount-downPay)/months);
}   







