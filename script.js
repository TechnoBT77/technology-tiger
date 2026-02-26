function toggleMenu() {
const sidebar = document.getElementById("sidebar");
sidebar.classList.toggle("open");
}

/* ============================= */
/*         RAMADAN EFFECT        */
/* ============================= */

document.addEventListener("DOMContentLoaded", function () {

document.body.classList.add("ramadan-mode");

// Banner
const banner = document.createElement("div");
banner.className = "ramadan-banner";
banner.innerText = "🌙 رمضان مبارك ✨";
document.body.appendChild(banner);

// Crescent
const crescent = document.createElement("div");
crescent.className = "crescent";
document.body.appendChild(crescent);

// Pattern
const pattern = document.createElement("div");
pattern.className = "ramadan-pattern";
document.body.appendChild(pattern);

// Stars
for (let i = 0; i < 40; i++) {
const star = document.createElement("div");
star.className = "star";
star.style.top = Math.random() * window.innerHeight + "px";
star.style.left = Math.random() * window.innerWidth + "px";
star.style.animationDuration = (Math.random() * 3 + 2) + "s";
document.body.appendChild(star);
}

});

/* ============================= */
/*      DOWNLOAD SKETCHWARE      */
/* ============================= */

function startDownloadSK() {
let timeLeft = 5;
const countdown = document.getElementById("countdownSK");
const realBtn = document.getElementById("realDownloadSK");

countdown.innerText = "سيبدأ التحميل خلال " + timeLeft + " ثواني...";

let timer = setInterval(function () {
timeLeft--;
countdown.innerText = "سيبدأ التحميل خلال " + timeLeft + " ثواني...";

if (timeLeft <= 0) {
clearInterval(timer);
countdown.innerText = "جاهز للتحميل ✅";
realBtn.style.display = "inline-block";
}
}, 1000);
}

/* ============================= */
/*       DOWNLOAD ADDONS         */
/* ============================= */

function startAddonsDownload() {
let timeLeft = 20;
const countdown = document.getElementById("countdownAddons");
const realBtn = document.getElementById("realDownloadAddons");

countdown.innerText = "سيبدأ تحميل الملحقات خلال " + timeLeft + " ثانية...";

let timer = setInterval(function () {
timeLeft--;
countdown.innerText = "سيبدأ تحميل الملحقات خلال " + timeLeft + " ثانية...";

if (timeLeft <= 0) {
clearInterval(timer);
countdown.innerText = "جاهز للتحميل ✅";
realBtn.style.display = "inline-block";
}
}, 1000);
}