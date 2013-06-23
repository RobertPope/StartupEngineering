#!/usr/bin/env node
var fs = require('fs');

function isPrime(integer) {
//is the number below 2?- then it is out of bounds for this function
    if (integer <= 1) {
        console.log("Out of bounds Error");
        return;
    }
    var root = Math.sqrt(integer);
    for (var i=2; i<=root; i++)
    {
        var ceiling = Math.ceil(integer/i);
        var floor = Math.floor(integer/i);
        if (ceiling == floor){
            return false;
        }
    }
    return true;
}

function oneHundredPrimes(){
    for(var i = 2, numOfPrimes = 0, primeNumbersArray = new Array();; i++){
        if (isPrime(i)){
            primeNumbersArray.push(i);
            numOfPrimes = primeNumbersArray.length;
            if (numOfPrimes >= 100){
                break;
            }
        }
    }
    var output = primeNumbersArray.join();
    console.log(numOfPrimes);
    return output;
}

var out = oneHundredPrimes();
var outfile = "oneHundredPrimes.csv";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: 100 prime numbers To: " + outfile);
