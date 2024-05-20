// Fungsi untuk melakukan prediksi nilai berdasarkan inputan pengguna
function prediksiNilai() {
    // Mendapatkan nilai dari elemen input dengan id "nilaiInput" dan mengonversinya ke tipe data float
    var nilai = parseFloat(document.getElementById("nilaiInput").value);
  
    // Mendapatkan elemen output untuk menampilkan predikat nilai
    var predikatOutput = document.getElementById("predikatOutput");
  
    // Memeriksa apakah nilai yang dimasukkan valid atau tidak
    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
      predikatOutput.value = "Nilai tidak valid"; // Jika tidak valid, tampilkan pesan kesalahan
    } else if (nilai >= 85 && nilai <= 100) { // Memeriksa rentang nilai untuk predikat A
      predikatOutput.value = "A"; // Jika di dalam rentang, predikat nilai A
    } else if (nilai >= 80 && nilai <= 84.99) { // Memeriksa rentang nilai untuk predikat A-
      predikatOutput.value = "A-"; // Jika di dalam rentang, predikat nilai A-
    } else if (nilai >= 75 && nilai <= 79.99) { // Memeriksa rentang nilai untuk predikat B+
      predikatOutput.value = "B+"; // Jika di dalam rentang, predikat nilai B+
    } else if (nilai >= 70 && nilai <= 74.99) { // Memeriksa rentang nilai untuk predikat B
      predikatOutput.value = "B"; // Jika di dalam rentang, predikat nilai B
    } else if (nilai >= 65 && nilai <= 69.99) { // Memeriksa rentang nilai untuk predikat B-
      predikatOutput.value = "B-"; // Jika di dalam rentang, predikat nilai B-
    } else if (nilai >= 60 && nilai <= 64.99) { // Memeriksa rentang nilai untuk predikat C+
      predikatOutput.value = "C+"; // Jika di dalam rentang, predikat nilai C+
    } else if (nilai >= 55 && nilai <= 59.99) { // Memeriksa rentang nilai untuk predikat C
      predikatOutput.value = "C"; // Jika di dalam rentang, predikat nilai C
    } else if (nilai >= 40 && nilai <= 54.99) { // Memeriksa rentang nilai untuk predikat D
      predikatOutput.value = "D"; // Jika di dalam rentang, predikat nilai D
    } else {
      predikatOutput.value = "E"; // Jika nilai tidak masuk ke dalam rentang manapun, predikat nilai E
    }
  }
  