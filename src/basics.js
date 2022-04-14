"use strict";
function sum(n1, n2, showresult, pharse) {
    //if(typeof n1 !== 'number' ||  typeof n2 !=='number')
    //{
    //  throw new Error('Incorrect input!');
    //}
    if (showresult) {
        console.log(pharse + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 67;
const number2 = 56.4;
const printresult = true;
const resultphase = 'Result is: ';
sum(number1, number2, printresult, resultphase);
