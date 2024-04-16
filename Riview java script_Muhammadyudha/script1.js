//bilangan prima 1 sampai 100
for(let num=1; num<= 100; num++)
{
    let isprime =true;
    if (num >1){
    for (let i=2; i< num; i++) {
        if(num %i ===0) {
            isprime = false;
            break;
        }
    }
}
else {isprime=false;}
if(isprime) {
    console.log(num +" Adalah bilangan prima ");
}
else{
    console.log(num);
}

}

