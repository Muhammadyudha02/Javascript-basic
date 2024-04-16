//menentukan bilangan yang bisa di bagi 3,5 dan keduanya dari angka 1 sampai 100 dengan console.fizz,buzz,fizzbuzz//
function bilangankelipatan() {
    
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(" FizzBuzz");
        } else if (i % 3 === 0) {
            console.log(" Fizz");
        } else if (i % 5 === 0) {
            console.log(" Buzz");
        } else {
            console.log(i);
        }
    }
}
bilangankelipatan();
