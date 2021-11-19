
var FirstInput='';
var SecondInput='';
var result=document.getElementById('result')
var FirstInput=document.getElementById('FirstInput');
var SecondInput=document.getElementById('SecondInput');
var val1=0
var val2=0;

function calculator(){
     val1 =  Number(FirstInput.value);
     console.log(FirstInput)
     val2 =  Number(SecondInput.value);
}

function add(){
    calculator();
    result.value = (val1 +val2);
}

function sub(){
    calculator();
    result.value = (val1 -val2);
}

function mul(){
    calculator();
    result.value = (val1 *val2);
} 

function div(){
    calculator();
    result.value = (val1 /val2);
}

function rem(){
    calculator();
    result.value = (val1 %val2);
}
