//menghitung volume kubus,balok,tabung,bola,kerucut
function volumekubus(sisi1, sisi2, sisi3) {
    return (sisi1 * sisi2 * sisi3);
  }
  
  function volumebalok(panjang, lebar, tinggi) {
    return panjang * lebar * tinggi;
  }
  
  function tabung(r, t) {
    const tbg = (22 / 7) * r ** 2 * t;
    return tbg;
  }
  function volumebola(jarijari2) {
    const bola = (4 / 3) * (jarijari2, 3);
    ;
    return bola;
  }
  function volumeKerucut(jarijari3, tinggi) {
    const Kerucut = (1 / 3) * (jarijari3, 2)* tinggi;
    return Kerucut;
}

  let lanjutkan;
  
  do {
    console.log("-- APLIKASI KALKULATOR BANGUN DATAR --");
    console.log("===============================================");
    console.log("Silahkan pilih menu di bawah");
    console.log("1.kubus");
    console.log("2.balok");
    console.log("3.tabung");
    console.log("4.bola");
    console.log("5.Kerucut");
    console.log("6.Keluar");
    console.log("===============================================");
  
    const menu = prompt("Pilih Menu");
  
    switch (menu) {
      case "1":
        const sisi1 = prompt("Masukkan sisi 1 : ");
        const sisi2 = prompt("Masukkan sisi 2 : ");
        const sisi3 = prompt("Masukkan sisi 3 : ");
        console.log(parseInt(volumekubus(sisi1, sisi2, sisi3)));
        break;
  
      case "2":
        panjang = prompt("Masukkan panjang : ");
        lebar = prompt("Masukkan lebar : ");
        tinggi = prompt("Masukkan tinggi : ");
        console.log(parseInt(volumebalok(panjang, lebar, tinggi)));
        break;
  
    case "3":
        r = prompt("Masukkan Jari-jari tabung");
        t = prompt("Masukkan Tinggi");
        console.log(parseFloat(tabung(r, t)));
         break;
  
      case "4":
        jarijari2 = prompt("Masukkan Nilai jari-jari : ");
        console.log(parseFloat(volumebola(jarijari2)));
        break;

        case "5":
        jarijari3 = prompt("Masukkan Nilai jari-jari kerucut : ");
        tinggi = prompt("Masukkan tinggi kerucut : ");
        console.log(parseFloat(volumeKerucut(jarijari3, tinggi)));
        break;

      default:
        alert("Menu yang anda pilih tidak tersedia");
        break;
    }
    lanjut = prompt("Mau piih yang lain?(Y/T)");
  } while (lanjutkan === "Y" || lanjutkan === "y");
  
  console.log("Terimakasih telah menggunakan program--");