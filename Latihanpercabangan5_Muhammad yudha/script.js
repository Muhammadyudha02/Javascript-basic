const bulan=prompt("Masukan nomor bulan")
let nama_bulan;
switch (bulan) {
    case "1":
      nama_bulan = "Januari";
      break;
    case "2":
    nama_bulan = "feburary";
      break;
    case "3":
    nama_bulan ="maret";
      break;
    case"4":
    nama_bulan="april";
        break;
    case"5":
    nama_bulan="mei";
        break;
    case"6":
    nama_bulan="juni";
        break;
    case"7":
    nama_bulan="juli";
        break;
    case"8":
    nama_bulan="agustus";
        break;
    case"9":
    nama_bulan="september";
        break;
    case"10":
    nama_bulan="Oktober";
        break;
    case"11":
    nama_bulan="november";
        break;
    case"12":
    nama_bulan="desember";
        break;
    default:
       console.log=('Bulan tidak terserdia');
      break;
}
console.log("bulan ke "+bulan+" adalah "+nama_bulan)