//membuat hitungan jumlah dan rata-rata angka array

let arr_count = parseInt(prompt("Masukkan panjang array:"));
function avgArray(arr_count){
    let arr = [];
    let total=0;


for (let i = 0; i < arr_count; i++) {
    let elemen = parseInt(prompt("Masukkan elemen ke-" + parseInt(i + 1) + ":"));
    arr[i] = elemen;
}
console.log(arr);
for (let i = 0; i < arr_count; i++) {
    total =total +arr[i];}

return (total/ arr_count)
}
const avg =avgArray(arr_count);
