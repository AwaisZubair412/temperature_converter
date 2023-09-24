var Celsius = document.querySelector(".cl");
var Fahrenheit = document.querySelector(".fh");
var Kelvin = document.querySelector(".kl");

Celsius.addEventListener("keyup",function(e){
    if (Celsius.value != "") {
        var value = Celsius.value;
        var num = parseFloat(value);
        if (!isNaN(num)) {
            clToFh(num);
            clToKl(num);
        }
        else{
            console.log("Please Enter valid number");
        }
    }
    else{
        Fahrenheit.value = "";
        Kelvin.value = "";
    }
})



Fahrenheit.addEventListener("keyup",function(e){
    if (Fahrenheit.value != "") {
        var value = Fahrenheit.value;
        var num = parseFloat(value);
        if (!isNaN(num)) {
            fhToCl(num);
            fhToKl(num);
        }
        else{
            console.log("Please Enter valid number");
        }
    }
    else{
        Celsius.value = "";
        Kelvin.value = "";
    }
});


Kelvin.addEventListener("keyup",function(){
    if (Kelvin.value != "") {
        var value = Kelvin.value;
        var num = parseFloat(value);
        if (!isNaN(num)) {
            klToCl(num);
            klTofh(num);
        }
        else{
            console.log("Please Enter valid number");
        }
    }
    else{
        Celsius.value = "";
        Fahrenheit.value = "";
    }
})


// ----------CELSIUS CONVERSION-------------

function clToKl(value){
    var val = value + 273.15;
    Kelvin.value = val;
}

function clToFh(value){
var val = (value * 9/5) + 32;
Fahrenheit.value = val;
}


// ------------Fahrenheit CONVERSION---------

function fhToCl(value){
    var val = (value - 32) * 5/9 
    Celsius.value = val;
}

function fhToKl(value){
    var val = (value + 459.67) * 5/9
    Kelvin.value = val;
}


// -------------KELVIN CONVERSION------------

function klToCl(value){
    var val = value - 273.15;
    Celsius.value = val;
}

function klTofh(value){
    var val =  value * 9/5 - 459.67 
    Fahrenheit.value = val;
}

