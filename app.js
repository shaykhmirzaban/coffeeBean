let cover1 = [
  {
    image: "./images/coffee-1.jpg",
  },
  {
    image: "./images/coffee-2.jpg",
  },
  {
    image: "./images/coffee-3.jpg",
  },
];

let ImageObj = [
  "./images/happyface/01-1-1229x1536.jpg",
  "./images/happyface/02-1229x1536.jpg",
  "./images/happyface/03-1229x1536.jpg",
  "./images/happyface/image-5.jpg",
  "./images/happyface/01-2-1229x1536.jpg",
  "./images/happyface/03-3-1229x1536.jpg",
  "./images/happyface/04-3-1229x1536.jpg",
];

let review = [
  {
    image: "./images/review/image-1.jpg",
    pera: "",
    name: "Brooklyn Simmons",
    about: "",
  },
  {
    image: "./images/review/image-2.jpg",
    pera: "",
    name: "Marilyn  Workman",
    about: "",
  },
  {
    image: "./images/review/image-3.jpg",
    pera: "",
    name: "Esther Howard",
    about: "",
  },
  {
    image: "./images/review/image-4.jpg",
    pera: "",
    name: "Darlene Robortson",
    about: "",
  },
  {
    image: "./images/review/image-5.jpg",
    pera: "",
    name: "Cameron Wiliomson",
    about: "",
  },
];

var num = 0;
var num1 = 0;

let cover = document.querySelector(".cover");
let moveCoverButton = document.querySelectorAll(".boo1");
let header = document.querySelector(".navbar");
let search = document.querySelector(".search");
let searchIcon = document.querySelector(".searchIcon");
let closeBtn = document.querySelector(".closeBtn");
let mobileNavbar = document.querySelector(".mobile-navbar");
let hamburger = document.querySelector(".hamburger");
let closeBtn1 = document.querySelector(".closeBtn1");
let ig1 = document.querySelectorAll(".dotted div");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let reviewImage = document.querySelector(".cus-review-img");
let reviewName = document.querySelector(
  ".cus-review-content .cus-review-det h3"
);
let boxSet = document.querySelectorAll(".box-set div");
let topBtn = document.querySelector(".gototop");
let counter = document.querySelectorAll(".counter");
let accept = document.querySelector(".accept");
let reject = document.querySelector(".reject");
let cookies = document.querySelector(".cookies");
let galleryBtn = document.querySelector(".closeBtnGallery");
let bigGallery = document.querySelector(".big-happy-face-screen");
let body = document.querySelector("body");
let bigScreenImage = document.querySelector(".big-img");
let removeLoading = document.querySelector(".preloader");

function removeLoad() {
  removeLoading.style.display = "none";
}

let speed = 200;
galleryBtn.addEventListener("click", closeBigScreen);
img1.addEventListener("click", showGalleryScreen);
img2.addEventListener("click", showGalleryScreen1);
img3.addEventListener("click", showGalleryScreen2);

function showGalleryScreen() {
  body.style.overflow = "hidden";
  bigScreenImage.style.backgroundImage =
    "url(./images/happyface/01-2-1229x1536.jpg)";
  bigGallery.style.transform = "scale(1)";
}
function showGalleryScreen1() {
  body.style.overflow = "hidden";
  bigScreenImage.style.backgroundImage =
    "url(./images/happyface/03-3-1229x1536.jpg)";
  bigGallery.style.transform = "scale(1)";
}
function showGalleryScreen2() {
  body.style.overflow = "hidden";
  bigScreenImage.style.backgroundImage =
    "url(./images/happyface/04-3-1229x1536.jpg)";
  bigGallery.style.transform = "scale(1)";
}
function closeBigScreen() {
  body.style.overflowY = "auto";
  bigGallery.style.transform = "scale(0)";
}

counter.forEach((count1) => {
  const updateCount = () => {
    const target = +count1.getAttribute("data-target");
    const count = +count1.innerText;
    const inc = Math.ceil(target / speed);
    if (count < target) {
      count1.innerText = count + inc;
      setTimeout(updateCount, 200);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});

accept.addEventListener("click", () => {
  alert("Thanks");
  cookies.style.transform = "translateX(500px)";
  setTimeout(() => {
    cookies.style.display = "none";
  }, 100);
});
reject.addEventListener("click", () => {
  cookies.style.transform = "translateX(500px)";
  setTimeout(() => {
    cookies.style.display = "none";
  }, 100);
});

hamburger.addEventListener("click", mobileNav);
closeBtn1.addEventListener("click", mobileNavClose);

boxSet.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.className === "box-set-1") {
      reviewImage.style.backgroundImage = `url(${review[0].image})`;
      reviewName.innerHTML = review[0].name;
      boxSet.forEach((a) => {
        if (a !== e) {
          a.classList.remove("active3");
        }
      });
      e.classList.toggle("active3");
    } else if (e.className === "box-set-2") {
      reviewImage.style.backgroundImage = `url(${review[1].image})`;
      reviewName.innerHTML = review[1].name;

      boxSet.forEach((a) => {
        if (a !== e) {
          a.classList.remove("active3");
        }
      });
      e.classList.toggle("active3");
    } else if (e.className === "box-set-3") {
      reviewImage.style.backgroundImage = `url(${review[2].image})`;
      reviewName.innerHTML = review[2].name;
      boxSet.forEach((a) => {
        if (a !== e) {
          a.classList.remove("active3");
        }
      });
      e.classList.toggle("active3");
    } else if (e.className === "box-set-4") {
      reviewImage.style.backgroundImage = `url(${review[3].image})`;
      reviewName.innerHTML = review[3].name;

      boxSet.forEach((a) => {
        if (a !== e) {
          a.classList.remove("active3");
        }
      });
      e.classList.toggle("active3");
    } else if (e.className === "box-set-5") {
      reviewImage.style.backgroundImage = `url(${review[4].image})`;
      reviewName.innerHTML = review[4].name;

      boxSet.forEach((a) => {
        if (a !== e) {
          a.classList.remove("active3");
        }
      });
      e.classList.toggle("active3");
    }
  });
});

ig1.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.className === "box-1") {
      img1.style.backgroundImage = `url(${ImageObj[4]})`;
      img2.style.backgroundImage = `url(${ImageObj[5]})`;
      img3.style.backgroundImage = `url(${ImageObj[6]})`;
      ig1.forEach((a) => {
        if (a !== e) {
          a.classList.remove("active2");
        }
      });
      e.classList.toggle("active2");
    } else if (e.className === "box-2") {
      img1.style.backgroundImage = `url(${ImageObj[5]})`;
      img2.style.backgroundImage = `url(${ImageObj[6]})`;
      img3.style.backgroundImage = `url(${ImageObj[0]})`;
      // e.classList.toggle("active2");
      ig1.forEach((a) => {
        if (a !== e) {
          a.classList.remove("active2");
        }
      });
      e.classList.toggle("active2");
    } else if (e.className === "box-3") {
      img1.style.backgroundImage = `url(${ImageObj[6]})`;
      img2.style.backgroundImage = `url(${ImageObj[0]})`;
      img3.style.backgroundImage = `url(${ImageObj[1]})`;
      // e.classList.toggle("active2");
      ig1.forEach((a) => {
        if (a !== e) {
          a.classList.remove("active2");
        }
      });
      e.classList.toggle("active2");
    } else if (e.className === "box-4") {
      img1.style.backgroundImage = `url(${ImageObj[0]})`;
      img2.style.backgroundImage = `url(${ImageObj[1]})`;
      img3.style.backgroundImage = `url(${ImageObj[2]})`;
      // e.classList.toggle("active2");
      ig1.forEach((a) => {
        if (a !== e) {
          a.classList.remove("active2");
        }
      });
      e.classList.toggle("active2");
    } else if (e.className === "box-5") {
      img1.style.backgroundImage = `url(${ImageObj[1]})`;
      img2.style.backgroundImage = `url(${ImageObj[2]})`;
      img3.style.backgroundImage = `url(${ImageObj[3]})`;
      // e.classList.toggle("active2");
      ig1.forEach((a) => {
        if (a !== e) {
          a.classList.remove("active2");
        }
      });
      e.classList.toggle("active2");
    } else if (e.className === "box-6") {
      img1.style.backgroundImage = `url(${ImageObj[2]})`;
      img2.style.backgroundImage = `url(${ImageObj[3]})`;
      img3.style.backgroundImage = `url(${ImageObj[4]})`;
      // e.classList.toggle("active2");
      ig1.forEach((a) => {
        if (a !== e) {
          a.classList.remove("active2");
        }
      });
      e.classList.toggle("active2");
    }
  });
});

moveCoverButton.forEach((e) => {
  e.addEventListener("click", move);
});

function move() {
  cover.style.backgroundImage = `url(${cover1[num].image})`;
  num++;
  if (num > 2) {
    num = 0;
  }
}

setInterval(move, 3000);

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

searchIcon.addEventListener("click", () => {
  search.style.transform = "translateY(-800px)";
  if (search.style.transform === "translateY(-800px)") {
    search.style.transform = "translateY(0px)";
  } else {
    search.style.transform = "translateY(-800px)";
  }
});
closeBtn.addEventListener("click", () => {
  if (search.style.transform === "translateY(0px)") {
    search.style.transform = "translateY(-800px)";
  } else {
    search.style.transform = "translateY(0px)";
  }
});

function mobileNav() {
  // mobileNavbar.style.transform = "translateX(-1600px)";
  if (mobileNavbar.style.transform === "translateX(-1600px)") {
    mobileNavbar.style.transform = "translateX(0px)";
  } else {
    mobileNavbar.style.transform = "translateX(-1600px)";
  }
}
function mobileNavClose() {
  mobileNavbar.style.transform = "translateX(-1600px)";
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    topBtn.style.transform = "scale(1)";
  } else {
    topBtn.style.transform = "scale(0)";
  }
});
