function konversiSuhu() {
    // Mendapatkan nilai Celsius dari input
    var nilaiCelsius = document.getElementById("input-field").value;

    // Melakukan konversi ke Fahrenheit
    var nilaiFahrenheit = (nilaiCelsius * 9/5) + 32;

    // Menampilkan hasil konversi di label "hasil-konversi"
    document.getElementById("hasil-konversi").textContent = "Hasil Konversi: " + nilaiCelsius + " Celsius =";
    document.getElementById("hasil-fahrenheit").textContent = nilaiFahrenheit + " Fahrenheit";
}

function showResult(mode) {
    var resultLabel = document.getElementById("hasil-konversi");
    var inputLabel = document.getElementById("input-field");

    if (mode === 'CtoF') {
        resultLabel.textContent = "Rumus: Fahrenheit = (Celsius * 9/5) + 32";
        inputLabel.placeholder = "Masukkan suhu dalam Celsius";
    } 
}

function rumus() {
    var rumusLabel = document.getElementById("Rumus"); // Fix the ID here
    var rumusResult = document.getElementById("rumusResult");

    rumusLabel.textContent = "Rumus:";
    rumusResult.textContent = "Rumus: Fahrenheit = (Celsius * 9/5) + 32";

}