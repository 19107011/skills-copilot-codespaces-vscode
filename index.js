// Buat fungsi untuk menjumlahkan dua angka
function jumlahkanDuaAngka(a, b) {
    return a + b;
}
// Ekspor fungsi tersebut agar bisa digunakan di file lain
module.exports = jumlahkanDuaAngka;
// Jalankan fungsi jika file ini dijalankan langsung
if (require.main === module) {
    const hasil = jumlahkanDuaAngka(5, 10);
    console.log(`Hasil penjumlahan: ${hasil}`);
}
