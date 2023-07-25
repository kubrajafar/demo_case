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
  } else {
    container.style.paddingLeft = `20px`;
  }
});

//signIn modal
const signIn = document.querySelector(".signIn");
const main = document.querySelector("#main");
const signIn_modal = document.querySelector(".signIn-modal");
const close_btn = document.querySelector(".close-btn");

signIn.addEventListener("click", () => {
  main.classList.toggle("active-modal");
  signIn_modal.classList.toggle("active-modal");
});
close_btn.addEventListener("click", () => {
  main.classList.remove("active-modal");
  signIn_modal.classList.remove("active-modal");
});

// watchlist

const music_card = document.querySelectorAll(".music-card");
const watchlist = document.querySelector(".watchlistBox");
const watchlis_closeBtn = document.querySelector(".watchlis-closeBtn");
const watchlist_Btn = document.querySelector(".watchlist_Btn");

watchlist_Btn.addEventListener("click", () => {
  watchlist.style.opacity = "1";
  watchlist.style.zIndex = "10";
});
watchlis_closeBtn.addEventListener("click", () => {
  watchlist.style.opacity = "0";
  watchlist.style.zIndex = "-1";
});
let wishlist_arr = [];

music_card.forEach((element) => {
  const music_name = element.children[1].children[0].children[0].innerText;
  const music_img = element.children[0].children[0];
  const wishlist_btn = element.children[1].children[1].children[0];

  wishlist_btn.addEventListener("click", () => {
    let obj = {
      name: "",
      img: "",
    };
    obj.name = music_name;
    obj.img = music_img.src;

    if (wishlist_arr.find((x) => x.name == music_name) === undefined) {
      wishlist_arr.push(obj);
    }

    watchlistShow(wishlist_arr);
  });
});

function watchlistShow(arr) {
  const music_cardBox = document.createElement("div");
  const music_name = document.createElement("h5");
  const music_img = document.createElement("img");
  const music_remove = document.createElement("p");

  music_cardBox.classList.add("music_cardBox");
  music_name.classList.add("music_name");
  music_img.classList.add("music_img");
  music_remove.classList.add("music_remove");

  arr.forEach((element) => {
    music_name.innerText = element.name;
    music_img.setAttribute("src", element.img);
    music_remove.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    music_cardBox.append(music_img, music_name, music_remove);
    watchlist.append(music_cardBox);
  });

  const musicWatchlistElement = document.querySelectorAll(".music_cardBox");
  musicWatchlistElement.forEach((element) => {
    element.children[2].addEventListener("click", () => {
      element.remove();
    });
  });
}
