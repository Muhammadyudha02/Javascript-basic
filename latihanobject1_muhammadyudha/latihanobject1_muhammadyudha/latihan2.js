const barang =[
    {
     kodebarang: "GDC-001",
     namabarang:"Goodday cappucino",
     harga:"115.000/box",
     stock:"4500",
    },
    {
    kodebarang: "KPLAPI-006",
    namabarang:"kAPAL API RTG",
    harga:"113.000/box",
    stock:"4300",
    },
    {
    kodebarang: "ABCSS-010",
    namabarang:"ABC SUSU",
    harga:"112.000/box",
    stock:"4100",
    },
    {
    kodebarang: "FRESCO-020",
    namabarang:"Fresco mocca",
    harga:"100.000/box",
    stock:"3900",
    },
    {
    kodebarang: "GDM-009",
    namabarang:"Goodday moccacino",
    harga:"125.000/box",
    stock:"4000",
    },    
]
console.log("=============================================================");
console.log("Kode Barang\t\tNama Produk\t\t\t\t\tHarga\t\tStock");
console.log("=============================================================");

barang.forEach(function (barang) {
  console.log(
    barang.kodebarang +
      "\t\t\t" +
      barang.namabarang +
      "\t\t" +
      barang.harga +
      "\t\t" +
      barang.stock
  );
});
console.log("=============================================================");