const pertanyaanList = [
    "Gimana kalau kita main bareng?",
    "Jalan bareng yuk?",
    "Kamu mau jadian sama aku ga?",
    "Pilih aku atau aku?",
    "Kamu suka aku ga?",
    "Apa warna favoritmu?",
    "Kamu suka coding juga?",
    "Mau belajar bareng aku?"
];

function tampilkanPertanyaan() {
    const randomIndex = Math.floor(Math.random() * pertanyaanList.length);
    const pertanyaan = pertanyaanList[randomIndex];
    document.getElementById('output').innerText = pertanyaan;
}