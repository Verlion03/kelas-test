// ======================
// LOADING FIX
// ======================

window.addEventListener("load",()=>{

    const loader = document.getElementById("loader");

    setTimeout(()=>{

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);


    },1000);

});








// ======================
// BUTTON MASUK
// ======================

function scrollTentang(){

    document
    .getElementById("tentang")
    .scrollIntoView({

        behavior:"smooth"

    });

}









// ======================
// JAM ANALOG + TANGGAL
// ======================


function updateClock(){


    let now = new Date();


    let jam = now.getHours();

    let menit = now.getMinutes();

    let detik = now.getSeconds();



    document.getElementById("jam").innerHTML =

    `${String(jam).padStart(2,"0")}:
    ${String(menit).padStart(2,"0")}:
    ${String(detik).padStart(2,"0")}`;



    let h = 
    ((jam%12)*30)+(menit*0.5);


    let m =
    menit*6;


    let s =
    detik*6;




    document.getElementById("jarum-jam")
    .style.transform=
    `rotate(${h}deg)`;


    document.getElementById("jarum-menit")
    .style.transform=
    `rotate(${m}deg)`;


    document.getElementById("jarum-detik")
    .style.transform=
    `rotate(${s}deg)`;





    let hari=[

        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"

    ];



    let bulan=[

        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"

    ];




    document.getElementById("tanggal").innerHTML =

    `${hari[now.getDay()]},
    ${now.getDate()}
    ${bulan[now.getMonth()]}
    ${now.getFullYear()}`;


}



setInterval(updateClock,1000);

updateClock();









// ======================
// STRUKTUR ORGANISASI
// ======================


const struktur=[


{
nama:"Pak Robi",
jabatan:"Wali Kelas",
foto:"img/walikelas.jpg"
},


{
nama:"Walid",
jabatan:"Ketua Kelas",
foto:"img/ketua.jpg"
},


{
nama:"Abang Nih Bouss",
jabatan:"Wakil Ketua",
foto:"anjay.png"
},


{
nama:"Jitakkk",
jabatan:"Sekretaris",
foto:"img/sekretaris.jpg"
},


{
nama:"Nama Wakil Sekretaris",
jabatan:"Wakil Sekretaris",
foto:"img/wakil-sekretaris.jpg"
},


{
nama:"Nama Bendahara",
jabatan:"Bendahara",
foto:"img/bendahara.jpg"
},


{
nama:"Nama Wakil Bendahara",
jabatan:"Wakil Bendahara",
foto:"img/wakil-bendahara.jpg"
}


];





const strukturBox =
document.getElementById("struktur-container");



struktur.forEach(data=>{


strukturBox.innerHTML += `


<div class="org-card">


<img src="${data.foto}">


<h3>
${data.nama}
</h3>


<p>
${data.jabatan}
</p>


</div>


`;


});









// ======================
// 30 DATA SISWA
// ======================


const siswaBox =
document.getElementById("siswa-container");



for(let i=1;i<=30;i++){


siswaBox.innerHTML += `


<div class="student">


<img src="img/siswa${i}.jpg">


<h3>
Nama Siswa ${i}
</h3>


<p>
Kelas X
</p>


</div>


`;


}









// ======================
// QUOTES RANDOM
// ======================


const quotes=[


"Teman boleh berubah, kenangan jangan hilang.",


"Satu kelas, satu cerita.",


"Kita datang sebagai siswa, pulang membawa kenangan.",


"Hari ini belajar, besok mengenang.",


"Kelas kecil dengan cerita besar."


];





setInterval(()=>{


let random =
Math.floor(Math.random()*quotes.length);



document.getElementById("quote").innerHTML =

`"${quotes[random]}"`;



},5000);









// ======================
// FOTO POPUP
// ======================


const popup =
document.getElementById("image-popup");


const popupImg =
document.getElementById("popup-img");


const close =
document.getElementById("close-popup");




document.addEventListener("click",(e)=>{


    if(
        e.target.tagName==="IMG"
        &&
        e.target.id!=="popup-img"
    ){


        popup.style.display="flex";


        popupImg.src=e.target.src;


    }


});





close.onclick=()=>{

    popup.style.display="none";

};




popup.onclick=(e)=>{


    if(e.target===popup){

        popup.style.display="none";

    }


};









// ======================
// NAV SMOOTH
// ======================


document.querySelectorAll("a")
.forEach(link=>{


link.addEventListener("click",(e)=>{


e.preventDefault();



document
.querySelector(link.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});



});


});