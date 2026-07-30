// ===== Data Kelas =====
// Ganti data di bawah ini sesuai kelas kamu
const siswaData = [
  { no: 1, nama: "walid", jabatan: "Ketua Kelas" },
  { no: 2, nama: "gw", jabatan: "Wakil Ketua" },
  { no: 3, nama: "zitaaa", jabatan: "Sekretaris" },
  { no: 4, nama: "idk", jabatan: "Bendahara" },
  { no: 5, nama: "idk", jabatan: "Anggota" },
  { no: 6, nama: "idk", jabatan: "Anggota" },
  { no: 7, nama: "idk", jabatan: "Anggota" },
  { no: 8, nama: "idk", jabatan: "Anggota" },
  { no: 9, nama: "idk", jabatan: "Anggota" },
  { no: 10, nama: "idk", jabatan: "Anggota" },
  { no: 11, nama: "idk", jabatan: "Anggota" },
  { no: 12, nama: "idk", jabatan: "Anggota" },
];

const jadwalData = [
  { jam: "07.00 - 08.30", senin: "Matematika", selasa: "Fisika", rabu: "B. Indonesia", kamis: "Kimia", jumat: "B. Inggris" },
  { jam: "08.30 - 10.00", senin: "Fisika", selasa: "Matematika", rabu: "Biologi", kamis: "PPKn", jumat: "Olahraga" },
  { jam: "10.15 - 11.45", senin: "Kimia", selasa: "B. Indonesia", rabu: "Matematika", kamis: "B. Inggris", jumat: "Seni Budaya" },
  { jam: "12.30 - 14.00", senin: "Biologi", selasa: "Sejarah", rabu: "Fisika", kamis: "Matematika", jumat: "—" },
];

const galeriData = [
  { label: "Study Tour", color: "#3E6B9E" },
  { label: "Class Meeting", color: "#C0453A" },
  { label: "Ujian Praktik", color: "#1E3D32" },
  { label: "Perayaan 17 Agustus", color: "#D9A441" },
  { label: "Piknik Kelas", color: "#3E6B9E" },
  { label: "Bakti Sosial", color: "#C0453A" },
];

// ===== Render Siswa =====
function renderSiswa(list) {
  const grid = document.getElementById("siswaGrid");
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = `<p class="siswa__empty">Nama tidak ditemukan.</p>`;
    return;
  }

  list.forEach(s => {
    const card = document.createElement("div");
    card.className = "siswa__card";
    card.innerHTML = `
      <span class="siswa__no">${String(s.no).padStart(2, "0")}</span>
      <p class="siswa__nama">${s.nama}</p>
      <span class="siswa__jabatan">${s.jabatan}</span>
    `;
    grid.appendChild(card);
  });
}

// ===== Render Jadwal =====
function renderJadwal() {
  const tbody = document.querySelector("#jadwalTable tbody");
  tbody.innerHTML = "";

  jadwalData.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.jam}</td>
      <td>${row.senin}</td>
      <td>${row.selasa}</td>
      <td>${row.rabu}</td>
      <td>${row.kamis}</td>
      <td>${row.jumat}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ===== Render Galeri =====
function renderGaleri() {
  const grid = document.getElementById("galeriGrid");
  grid.innerHTML = "";

  galeriData.forEach((g, i) => {
    const item = document.createElement("div");
    item.className = "galeri__item";
    item.style.background = g.color;
    item.style.setProperty("--r", `${(i % 2 === 0 ? -1 : 1) * 1.5}deg`);
    item.textContent = g.label;
    grid.appendChild(item);
  });
}

// ===== Search Siswa =====
function setupSearch() {
  const input = document.getElementById("cariSiswa");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    const filtered = siswaData.filter(s => s.nama.toLowerCase().includes(q));
    renderSiswa(filtered);
  });
}

// ===== Form Pesan (disimpan di memori selama sesi) =====
let daftarPesan = [];

function setupForm() {
  const form = document.getElementById("pesanForm");
  const list = document.getElementById("daftarPesan");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = document.getElementById("namaPengirim").value.trim();
    const isi = document.getElementById("isiPesan").value.trim();
    if (!nama || !isi) return;

    daftarPesan.unshift({ nama, isi });
    renderPesan();
    form.reset();
  });

  function renderPesan() {
    list.innerHTML = "";
    daftarPesan.forEach(p => {
      const li = document.createElement("li");
      li.innerHTML = `<b>${p.nama}</b>${p.isi}`;
      list.appendChild(li);
    });
  }
}

// ===== Navbar mobile toggle =====
function setupNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");

  toggle.addEventListener("click", () => {
    navbar.classList.toggle("is-open");
  });

  navbar.querySelectorAll(".navbar__links a").forEach(link => {
    link.addEventListener("click", () => navbar.classList.remove("is-open"));
  });
}

// ===== Isi info profil otomatis =====
function setupProfil() {
  document.getElementById("jumlahSiswa").textContent = `${siswaData.length} Siswa`;
}

// ===== Footer tahun =====
function setupFooter() {
  document.getElementById("tahunFooter").textContent = new Date().getFullYear();
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  renderSiswa(siswaData);
  renderJadwal();
  renderGaleri();
  setupSearch();
  setupForm();
  setupNavbar();
  setupProfil();
  setupFooter();
});
