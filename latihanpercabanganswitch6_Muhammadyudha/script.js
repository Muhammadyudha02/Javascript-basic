console.log("Program kalkulator sederhana")
console.log("1.Penjumlahan")
console.log("2.pengurangan")
console.log("3.perkalian")
console.log("4.Pembagian")
console.log("5.Keluar program")
console.log("")

const menu = prompt("Menu kalkulator(angka) :");
if(menu <=4){
     pertama=parseInt (prompt("angka pertama :"));
     kedua = parseInt (prompt("Angka kedua"))
     console.log("Angka pertama :"+ pertama)
    console.log("Angka kedua : "+ kedua)  
}

let kalkulator;
switch (menu) {
  case "1":
    kalkulator = (pertama+kedua)
    console.log("Hasil dari: "+pertama+"+"+kedua+"="+kalkulator)
    break;
  case "2":
    kalkulator =(pertama-kedua)
    console.log("Hasil dari: "+pertama+"-"+kedua+"="+kalkulator)
    break;
  case "3":
    kalkulator = (pertama*kedua)
    console.log("Hasil dari: "+pertama+"x"+kedua+"="+kalkulator)
    break;
  case "4":
    kalkulator = (pertama/kedua)
    console.log("Hasil dari: "+pertama+":"+kedua+"="+kalkulator)
    break;
    case"5":
    pesan ="Keluar program"
    console.log("Keluar program...terima kasih!");
    break;
}
