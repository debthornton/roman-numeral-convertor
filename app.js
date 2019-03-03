'use strict';
var arabic = document.querySelector('.arabic');
var roman = document.querySelector('.roman');
var label = document.querySelector('label');

function convertToRoman(num) {
    var intNum = Number(num);
    var boolean = Number.isInteger(intNum);
    
    switch (boolean) {              
        case true:
            label.classList.remove('active');
            var numeral = '';
            var numeralsArr = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
            var breakpoints = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
        
            for (var i = 12; i >= 0; i--) {
                while (intNum >= breakpoints[i]) {
                    numeral += numeralsArr[i];
                    intNum -= breakpoints[i];
                }
            }
            roman.value = numeral;
            roman.innerHTML = numeral;
            return numeral;
            break;
        default:        
            label.classList.add('active');
        }
    }

document.querySelector(".arabic").addEventListener("keyup", function(){
  convertToRoman(arabic.value);
});

