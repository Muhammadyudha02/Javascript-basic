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
function tampilkanbarang(barang) {
    console.log("=============================================================");
    console.log("kode barang\t\t\t Nama barang\t\t Harga barang \tStock");
    console.log("=============================================================");
    
    console.log(barang[0].kodebarang+"\t\t\t"+
    barang[0].namabarang+"\t\t"+
    barang[0].harga+"\t\t"+
    barang[0].stock+"\t\t")

    console.log(barang[1].kodebarang+"\t\t\t"+
    barang[1].namabarang+"\t\t"+
    barang[1].harga+"\t\t"+
    barang[1].stock+"\t\t")

    console.log(barang[2].kodebarang+"\t\t\t"+
    barang[2].namabarang+"\t\t\t"+
    barang[2].harga+"\t\t"+
    barang[2].stock+"\t\t")

    console.log(barang[3].kodebarang+"\t\t\t"+
    barang[3].namabarang+"\t\t"+
    barang[3].harga+"\t\t"+
    barang[3].stock+"\t\t")

    console.log(barang[4].kodebarang+"\t\t\t"+
    barang[4].namabarang+"\t\t"+
    barang[4].harga+"\t\t"+
    barang[4].stock+"\t\t")

    console.log("=============================================================");
}

tampilkanbarang(barang);