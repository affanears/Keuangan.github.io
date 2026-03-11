const scriptURL = "https://script.google.com/macros/s/AKfycbzZSUpNVWVU7Gj-UbHjUQOzPg-XSpFIsjqhZx2FAwFYd4XzJ7RYiXRkdnOH_JHtMXqw/exec"; // ganti dengan Web App URL

const nominalInput = document.getElementById("nominal");

nominalInput.addEventListener("input", function(){
    let angka = this.value.replace(/[^0-9]/g,'');
    let rupiah = new Intl.NumberFormat("id-ID").format(angka);
    this.value = rupiah;
});

function kirimData(){
    let keterangan = document.getElementById("keterangan").value;
    let nominal = document.getElementById("nominal").value.replace(/\./g,"");
    let tipe = document.getElementById("tipe").value;

    fetch(scriptURL,{
        method:"POST",
        body:JSON.stringify({ keterangan, nominal, tipe })
    })
    .then(res=>res.json())
    .then(data=>{
        alert("Data berhasil disimpan");

        // reset input
        document.getElementById("keterangan").value = "";
        document.getElementById("nominal").value = "";
        document.getElementById("tipe").value = "Pemasukan";
    });
}

// Ganti dengan URL spreadsheet Anda
const urlSpreadsheet = "https://docs.google.com/spreadsheets/d/1RmxReVtlbCTSm-RBwj3hip-jMskFpVDW8ppHiRioT0A/edit?usp=sharing"; 

function bukaSpreadsheet() {
  window.open(urlSpreadsheet, "_blank");
}

function downloadSpreadsheet() {
  // URL download XLSX
  const downloadUrl = urlSpreadsheet.replace("/edit", "/export?format=xlsx");
  window.open(downloadUrl, "_blank");
}

const warningEl = document.querySelector(".warning");

const today = new Date();
const tanggal = today.getDate();

// Menampilkan peringatan hanya jika tanggal >= 28
if (tanggal >= 28) {
  warningEl.style.display = "block";
} else {
  warningEl.style.display = "none";
}