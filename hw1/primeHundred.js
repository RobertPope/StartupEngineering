function isPrime(integer) {
//is the number below 2?- then it is out of bounds for this function
if (integer < 2){
console.log("Out of bounds Error");
break
}
//divide the integer by x - where x is all whole numbers =>  SQRT of integer
//is it a whole number?
//Yes - return FALSE - number is not prime
//none of the numbers up to x returned a whole number when dividing integer by x?
//Return TRUE - the number is an integer
  return integer;
}

function getHundredPrimes(){
var i = 100;
for j = 0, 100, j++{
if j<i{
  if (isPrime(i)){
  primes[] = i;
  if (primes.length = 100){
    return primes;
}
}
}
}

}

var primes = array();
primes = getHundredPrimes();
primes = explode(primes, ',');
//print primes to a file

console.log('file has been printed');
