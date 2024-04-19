const nama=['andrew', 'bob', 'clark', 'david', 'ethan', "fernando", "gabriel"]
console.log(nama)

nama.push=["Harold", "Iglesias", "jackson"];
console.log(nama);

//slice
const nama2= [
    nama.slice(1, 2),
    nama.slice(3, 4),
    nama.slice(5, 6),
]
console.log(nama2.join(', '))

//menghapus nama jackson
nama.pop()
console.log(nama);

//menghapus nama andrew
nama.shift()
console.log(nama);

//menambahkan nama anddy sebelum bob
nama.unshift()
console.log(nama);

//menambahkan nama fernando sebelum francisco
nama.splice(5, 1, 'Franscesco');
console.log(nama);

//menghapus nama ethan
nama.splice(4, 1);
console.log(nama);
                               2