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
    pera: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    name: "Brooklyn Simmons",
    about: "",
  },
  {
    image: "./images/review/image-2.jpg",
    pera: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempore eum.",
    name: "Marilyn  Workman",
    about: "",
  },
  {
    image: "./images/review/image-3.jpg",
    pera: "Accusamus cumque odio saepe iusto rem.",
    name: "Esther Howard",
    about: "",
  },
  {
    image: "./images/review/image-4.jpg",
    pera: "Sed in quidem vel error consequuntur cupiditate amet obcaecati explicabo laboriosam.",
    name: "Darlene Robortson",
    about: "",
  },
  {
    image: "./images/review/image-5.jpg",
    pera: "Adipisci aliquid reprehenderit quae aliquam autem laborum quaerat rerum necessitatibus assumenda eaque aspernatur eius.",
    name: "Cameron Wiliomson",
    about: "",
  },
];

let DOM = {
  cover: ".cover",
  moveCoverButton: ".boo1",
  header: ".navbar",
  search: ".search",
  searchIcon: ".searchIcon",
  closeBtn: ".closeBtn",
  mobileNavbar: ".mobile-navbar",
  hamburger: ".hamburger",
  closeBtn1: ".closeBtn1",
  ig1: ".dotted div",
  img1: ".img1",
  img2: ".img2",
  img3: ".img3",
  reviewImage: ".cus-review-img",
  reviewName: ".cus-review-content .cus-review-det h3",
  boxSet: ".box-set div",
  topBtn: ".gototop",
  counter: ".counter",
  accept: ".accept",
  reject: ".reject",
  cookies: ".cookies",
  galleryBtn: ".closeBtnGallery",
  bigGallery: ".big-happy-face-screen",
  body: "body",
  bigScreenImage: ".big-img",
  removeLoading: ".preloader",
  leftBtn: ".left-side-Btn",
  rightBtn: ".right-side-Btn",
  imageNumber: ".imgNum",
  mobileNavList: ".mobile-nav ul li",
  reviePera: ".quote p"
}

let cover = document.querySelector(DOM.cover);
let moveCoverButton = document.querySelectorAll(DOM.moveCoverButton);
let header = document.querySelector(DOM.header);
let search = document.querySelector(DOM.search);
let searchIcon = document.querySelector(DOM.searchIcon);
let closeBtn = document.querySelector(DOM.closeBtn);
let mobileNavbar = document.querySelector(DOM.mobileNavbar);
let hamburger = document.querySelector(DOM.hamburger);
let closeBtn1 = document.querySelector(DOM.closeBtn1);
let ig1 = document.querySelectorAll(DOM.ig1);
let img1 = document.querySelector(DOM.img1);
let img2 = document.querySelector(DOM.img2);
let img3 = document.querySelector(DOM.img3);
let reviewImage = document.querySelector(DOM.reviewImage);
let reviewName = document.querySelector(DOM.reviewName);
let boxSet = document.querySelectorAll(DOM.boxSet);
let topBtn = document.querySelector(DOM.topBtn);
let counter = document.querySelectorAll(DOM.counter);
let accept = document.querySelector(DOM.accept);
let reject = document.querySelector(DOM.reject);
let cookies = document.querySelector(DOM.cookies);
let galleryBtn = document.querySelector(DOM.galleryBtn);
let bigGallery = document.querySelector(DOM.bigGallery);
let body = document.querySelector(DOM.body);
let bigScreenImage = document.querySelector(DOM.bigScreenImage);
let removeLoading = document.querySelector(DOM.removeLoading);
let left = document.querySelector(DOM.leftBtn);
let right = document.querySelector(DOM.rightBtn);
let imgNumber = document.querySelector(DOM.imageNumber);
let mobileNavList = document.querySelectorAll(DOM.mobileNavList);
let reviewPera = document.querySelector(DOM.reviePera);

var num = 0;
var num1 = 0;
let speed = 200;
var imgNum = 0;


right.addEventListener("click", ()=> {
  imgNum++;
  if(imgNum > ImageObj.length - 1){
    imgNum = 0;
  }
  bigScreenImage.style.backgroundImage = `url(${ImageObj[imgNum]})`;
  imgNumber.innerText = imgNum;
  if(imgNum === 0){
    imgNumber.innerText = 7;  
  }
})
left.addEventListener("click", ()=> {
  imgNum--;
  if(imgNum === - 1){
    imgNum = ImageObj.length - 1;
  }
  bigScreenImage.style.backgroundImage = `url(${ImageObj[imgNum]})`;
  imgNumber.innerText = imgNum;
  if(imgNum === 0){
    imgNumber.innerText = 7;  
  }
})


function removeLoad() {
  removeLoading.style.display = "none";
}


galleryBtn.addEventListener("click", closeBigScreen);
img1.addEventListener("click", showGalleryScreen);
img2.addEventListener("click", showGalleryScreen1);
img3.addEventListener("click", showGalleryScreen2);
hamburger.addEventListener("click", mobileNav);
closeBtn1.addEventListener("click", mobileNavClose);
mobileNavList.forEach((e)=> {
  e.addEventListener("click", mobileNavClose);
});

function showGalleryScreen() {
  body.style.overflow = "hidden";
  let url = window.getComputedStyle(img1);
  let bg = url.backgroundImage;
  bigScreenImage.style.backgroundImage = bg;
  bigGallery.style.transform = "scale(1)";
  imgNumber.innerText = 1;
}
function showGalleryScreen1() {
  body.style.overflow = "hidden";
  let url = window.getComputedStyle(img2);
  let bg = url.backgroundImage;
  bigScreenImage.style.backgroundImage = bg;
  bigGallery.style.transform = "scale(1)";
  imgNumber.innerText = 2;
}
function showGalleryScreen2() {
  body.style.overflow = "hidden";
  let url = window.getComputedStyle(img3);
  let bg = url.backgroundImage;
  bigScreenImage.style.backgroundImage = bg;
  bigGallery.style.transform = "scale(1)";
  imgNumber.innerText = 3;
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

boxSet.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.className === "box-set-1") {
      reviewImage.style.backgroundImage = `url(${review[0].image})`;
      reviewName.innerHTML = review[0].name;
      reviewPera.innerHTML = review[0].pera;
      boxSet.forEach((a) => {
        if (a !== e) {
          a.classList.remove("active3");
        }
      });
      e.classList.toggle("active3");
    } else if (e.className === "box-set-2") {
      reviewImage.style.backgroundImage = `url(${review[1].image})`;
      reviewName.innerHTML = review[1].name;
      reviewPera.innerHTML = review[1].pera;
      boxSet.forEach((a) => {
        if (a !== e) {
          a.classList.remove("active3");
        }
      });
      e.classList.toggle("active3");
    } else if (e.className === "box-set-3") {
      reviewImage.style.backgroundImage = `url(${review[2].image})`;
      reviewName.innerHTML = review[2].name;
      reviewPera.innerHTML = review[2].pera;
      boxSet.forEach((a) => {
        if (a !== e) {
          a.classList.remove("active3");
        }
      });
      e.classList.toggle("active3");
    } else if (e.className === "box-set-4") {
      reviewImage.style.backgroundImage = `url(${review[3].image})`;
      reviewName.innerHTML = review[3].name;
      reviewPera.innerHTML = review[3].pera;
      boxSet.forEach((a) => {
        if (a !== e) {
          a.classList.remove("active3");
        }
      });
      e.classList.toggle("active3");
    } else if (e.className === "box-set-5") {
      reviewImage.style.backgroundImage = `url(${review[4].image})`;
      reviewName.innerHTML = review[4].name;
      reviewPera.innerHTML = review[4].pera;
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

  let trans = window.getComputedStyle(mobileNavbar);

  if (trans.transform.slice(19, -4) === "-1600") {
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
