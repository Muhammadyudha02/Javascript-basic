//IF statment
const totalbelanja = 120000;

if (totalbelanja > 10000) {
  console.log("selamat anda mendapatkan dsikon!");
}

console.log("Terima kasih telah berbelanja");

//IF ELSE statment
/*
const total_belanja=prompt("Masukan total belanja : ")
if(totalbelanja >100000){console.log("selamat anda mendapatkan piring cantik!");}
else{console.log("Mohon maaf anda belum mendapatkan Hadiah!")}

console.log("TERIMAKASIH SUDAH BERBELANJA!")
*/

//2.LOGIN
const password = "Legendofang";
if (password === "Legendofang") {
  console.log("Silahkan masuk,ang");
} else {
  console.log("Password salah,Silahkan coba lagi!");
}
 //if...else if...else statment
 /*
 const nilai =prompt("Masukan nilai anda: ")
 if (nilai>=80){console.log("Nilai anda adalah A")}
 else if (nilai>=65){console.log("Nilai anda adalah B")}
 else if (nilai>=50){console.log("Nilai anda adalah C")}
 else{console.log("Nilai anda adalah D")}
 */

 //switch statment
 const warna="merah"
 let keterangan =""
 switch (warna)
 {case "merah" :
keterangan="Anda memilih warna merah!";break;
case "biru":
    keterangan="Anda memilih warna biru!";break;
case "kuning" :
    keterangan="Anda memilih warna kuning!";break;
default :
keterangan ="warna tidak valid";break;}
console.log(keterangan);