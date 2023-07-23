// song play
const mySong = document.getElementById("mySong");
const header_music = document.querySelector(".header-music");

header_music.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    header_music.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
  } else {
    mySong.pause();
    header_music.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
  }
};

// dropdown menu
const dropdown_menu = document.querySelector(".dropdown-menu");

dropdown_menu.addEventListener("click", () => {
  dropdown_menu.classList.toggle("active-dropdown");
});

//hamburger menu
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const container = document.querySelector(".container");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active-nav");
  console.log(navbar.className);
  if (navbar.className.includes("active-nav")) {
    container.style.paddingLeft = 0;
  }else{
    container.style.paddingLeft = `20px`;
  }
});

//signIn modal
const signIn = document.querySelector(".signIn");
const close_btn = document.querySelector(".close-btn");


signIn.addEventListener("click", () => {
document.body.classList.add("active-modal")
});
close_btn.addEventListener("click", () => {
  document.body.classList.remove("active-modal")
  });