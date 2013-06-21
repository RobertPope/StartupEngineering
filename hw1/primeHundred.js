#!/usr/bin/env node
var fs = require('fs');
var outfile = "hello.txt";

function isPrime(integer) {
//is the number below 2?- then it is out of bounds for this function
    if (integer <= 2) {
        console.log("Out of bounds Error");
        return;
    }
    var root = Math.sqrt(integer);
    console.log("The square root of Integer" + integer + "is" + root);
    for (var i=2; i<root; i++)
    {
        var ceiling = Math.ceil(integer/i);
        var floor = Math.floor(integer/i);
        if (ceiling == floor){
            console.log("Not a Prime Number")
        }
        console.log("I: " + i);
        console.log("Ceiling: " + ceiling);
        console.log("Floor: " + floor);
    }
//divide the integer by x - where x is all whole numbers =>  SQRT of integer
//is it a whole number?
//Yes - return FALSE - number is not prime
//none of the numbers up to x returned a whole number when dividing integer by x?
//Return TRUE - the number is an integer
}
isPrime(15);
//function getHundredPrimes() {

//}

//var primes = array();
//primes = getHundredPrimes();
//var out = explode(primes, ',');
//print primes to a file
//fs.writeFileSync(outfile, out);
//console.log("Script: " + __filename + "\nWrote: 100 prime numbers To: " + outfile);
