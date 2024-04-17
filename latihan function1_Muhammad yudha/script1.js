//menghitung ruas persegi panjang,lingkaran,segitiga
function persegi(s1, s2) {
    return s1 * s2;
  }
  
  function persegi_panjang(p1, l1) {
    return p1 * l1;
  }
  
  function lingkaran( r) {
    const lingkaran = (22 / 7) * r ** 2;
     return lingkaran;
  }
  
  function segitiga(a, t) {
    const segitiga = (1 / 2) * a * t;
    return segitiga;
  }
  
  let lanjutkan;
  
  do {
    console.log("-- APLIKASI KALKULATOR BANGUN DATAR --");
    console.log("Silahkan pilih menu di bawah");
    console.log("1.Persegi");
    console.log("2.Persegi Panjang");
    console.log("3.Lingkaran");
    console.log("4.Segitiga");
    console.log("5.Keluar");
    console.log("===============================================");
  
    const menu = prompt("Pilih Menu");
  
    switch (menu) {
      case "1":
        const s1 = prompt("Masukkan sisi 1 : ");
        const s2 = prompt("Masukkan sisi 2 : ");
        console.log(parseInt(persegi(s1, s2)));
        break;
  
      case "2":
        p1 = prompt("Masukkan panjang : ");
        l1 = prompt("Masukkan lebar : ");
        console.log(parseInt(persegi_panjang(p1, l1)));
        break;
  
      case "3":
        r = prompt("Masukkan Nilai r : ");
        console.log(parseInt(lingkaran(r)));
        break;
  
      case "4":
        a = prompt("Masukkan Nilai a : ");
        t = prompt("Masukkan Nilai t : ");
        console.log(parseFloat(segitiga(a, t)));
        break;
  
      default:
        alert("Menu yang anda pilih tidak tersedia");
        break;
    }
    lanjut = prompt("Mau piih yang lain?(Y/T)");
  } while (lanjutkan === "Y" || lanjutkan === "y");
  
  console.log("Terimakasih telah menggunakan program--");