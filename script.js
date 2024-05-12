// Mendapatkan konteks kanvas
const canvas = document.getElementById('simulasi');
const ctx = canvas.getContext('2d');

// Mengatur ukuran kanvas
canvas.width = 800;
canvas.height = 600;

// Variabel untuk menyimpan posisi dan kecepatan benda
let x = 100; // Posisi awal di sumbu-x
let y = 50; // Posisi awal di sumbu-y
let vy = 0; // Kecepatan awal di sumbu-y
const g = 9.8; // Percepatan gravitasi (m/s^2)

// Fungsi untuk menggambar benda pada kanvas
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

// Fungsi utama untuk mengupdate posisi benda dan menggambarnya
function update() {
    // Mengosongkan kanvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Menghitung kecepatan baru berdasarkan percepatan gravitasi
    vy += g * 0.01; // Mengalikan dengan 0.01 untuk memperlambat simulasi

    // Memperbarui posisi benda
    y += vy;

    // Menggambar benda
    drawBall();

    // Meminta animasi frame berikutnya
    requestAnimationFrame(update);
}

// Memulai animasi
update();