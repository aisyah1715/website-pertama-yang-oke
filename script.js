const pertanyaanList = [
    "Gimana kalau kita main bareng?",
    "Jalan bareng yuk?",
    "Pilih aku atau aku?",
    "Kamu suka aku ga?",
    "Apa warna favoritmu?",
    "Kamu suka coding juga?",
    "Mau belajar bareng aku?"
];

let pertanyaanSekarang = "";
let jawabanList = [];

function tampilkanPertanyaan() {
    const randomIndex = Math.floor(Math.random() * pertanyaanList.length);
    pertanyaanSekarang = pertanyaanList[randomIndex];
    document.getElementById('output').innerText = pertanyaanSekarang;
    document.getElementById('jawabBox').style.display = "block";
    document.getElementById('jawabanInput').value = "";
}

function kirimJawaban() {
    const jawaban = document.getElementById('jawabanInput').value.trim();
    if (jawaban !== "") {
        jawabanList.push({
            pertanyaan: pertanyaanSekarang,
            jawaban: jawaban
        });
        tampilkanJawaban();
        document.getElementById('jawabBox').style.display = "none";
        document.getElementById('output').innerText = "";
    }
}

function tampilkanJawaban() {
    const floatingBox = document.getElementById('floatingJawaban');
    floatingBox.innerHTML = jawabanList.map(item => `
        <div class="jawaban-card">
            <div class="pertanyaan-label">Pertanyaan:</div>
            <div class="pertanyaan-text">${item.pertanyaan}</div>
            <div class="jawaban-label">Jawaban:</div>
            <div class="jawaban-text">${item.jawaban}</div>
        </div>
    `).join('<hr>');
}