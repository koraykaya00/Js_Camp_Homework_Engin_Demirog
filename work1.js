///////////
// İlk Soru
///////////

function findPrime(...num) {
    let primeOrNot = true
    if (num <= 1) {
        console.log("Girdiğiniz sayı asal değildir...")
        return;  
    }
    for (let i = 2; i < num; i++) {
        if(num % i == 0) {
            primeOrNot = false;
        }
    }
    if (primeOrNot) {
        console.log("Girdiğiniz sayı asaldır...")
    }
    else {
        console.log("Girdiğiniz sayo asal değildir...")
    }
}

findPrime(23);
findPrime(1);





///////////////
// İkinci Soru
///////////////

function friendNumber(number1,number2) {
    let total1 = 0;
    let total2 = 0;

    for (let i =1; i < number1; i++) {
        if(number1 % i == 0) {
            total1 += i;
        }
    }
    
    for (let k = 1; k < number2; k++) {
        if(number2 % k === 0) {
            total2 += k;
        }
    }
    
    if (number1 == total2 && total1 == number2) {
        console.log("Girdiğiniz iki sayı arkadaş sayıdır.");
    }
    else{
        console.log("Girdiğiniz iki sayı arkadaş sayı değildir.");
    }
}


friendNumber(220,284);
friendNumber(158,210);

///////////////
// ÜÇÜNCÜ SORU
///////////////

function perfectNumber() {

    let i=1;
    for (let i=1; i <= 1000; i++) {
        let sum = 0;
        for (let j = 1; j < i; j++) {
            if(i % j == 0){
            sum += j; 
            }
        }
        if (sum == i){
        console.log(i + " Mükemmel bir sayıdır.");
        }
    }
}

perfectNumber()


/////////////////
// DÖRDÜNCÜ SORU
/////////////////

function findPrimeNum() {
    let num = [];
    let sum;
    for (let i = 0; i <= 1000; i++) {
        sum ++
        for (let k = 2; k <= i; k++) {
            if (i % k == 0) {
                sum = 0
            }
        }
        if (sum === 0){
            num.push(i);
        }
    }
    console.log(num)
}

findPrimeNum()