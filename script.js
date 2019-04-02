function printPrimes() {
    let numberOfPrimes = Number(document.getElementById("numberOfPrimes").value);
    let count = 0;
    let sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'><tr>";
    switch (numberOfPrimes) {
        case 0:
        break;
        default:
            let i, number;
            let j = 0;
            for (number = 2; count < numberOfPrimes; number = number + 1) {
                let isPrime = false;
                for (i = 2; i <= number; i++) {
                    if (number % i === 0) {
                        if (i ===number) {
                            isPrime = true;
                        } else break;
                    }
                    if (isPrime) {
                        count++;
                        sout = sout + "<td>" + number + "</td>";
                        j++;
                        }
                    if(j===10){
                        sout = sout + "</ tr>" +"<tr>";
                        j = 0
                    }
                }
            }
        break;
    }
    sout = sout + "</table>";
    document.getElementById('table').innerHTML = sout;
}


