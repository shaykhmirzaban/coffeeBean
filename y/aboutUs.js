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
    header: ".navbar",
    search: ".search",
    searchIcon: ".searchIcon",
    closeBtn: ".closeBtn",
    mobileNavbar: ".mobile-navbar",
    hamburger: ".hamburger",
    closeBtn1: ".closeBtn1",
    reviewImage: ".cus-review-img",
    reviewName: ".cus-review-content .cus-review-det h3",
    boxSet: ".box-set div",
    topBtn: ".gototop",
    counter: ".counter",
    removeLoading: ".preloader",
    mobileNavList: ".mobile-nav ul li",
    reviePera: ".quote p",
    white1: ".white1-content h2",
    white2: ".white2-content h2",
    white3: ".white3-content h2",
    whb: ".whb1"
  }
  
  let header = document.querySelector(DOM.header);
  let search = document.querySelector(DOM.search);
  let searchIcon = document.querySelector(DOM.searchIcon);
  let closeBtn = document.querySelector(DOM.closeBtn);
  let mobileNavbar = document.querySelector(DOM.mobileNavbar);
  let hamburger = document.querySelector(DOM.hamburger);
  let closeBtn1 = document.querySelector(DOM.closeBtn1);
  let reviewImage = document.querySelector(DOM.reviewImage);
  let reviewName = document.querySelector(DOM.reviewName);
  let boxSet = document.querySelectorAll(DOM.boxSet);
  let topBtn = document.querySelector(DOM.topBtn);
  let counter = document.querySelectorAll(DOM.counter);
  let removeLoading = document.querySelector(DOM.removeLoading);
  let mobileNavList = document.querySelectorAll(DOM.mobileNavList);
  let reviewPera = document.querySelector(DOM.reviePera);
  let whb = document.querySelectorAll(DOM.whb);
  
  var num = 0;
  var num1 = 0;
  let speed = 200;
  
  function removeLoad() {
    removeLoading.style.display = "none";
  }
  
  hamburger.addEventListener("click", mobileNav);
  closeBtn1.addEventListener("click", mobileNavClose);
  mobileNavList.forEach((e)=> {
    e.addEventListener("click", mobileNavClose);
  });
  
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
  
  whb.forEach((count1)=>{
      let UpdateCount = () => {
      let counNum = +count1.getAttribute("data-target");
      let count = +count1.innerText;
      let inc = Math.ceil(counNum / speed);
      if(count < counNum) {
         count1.innerText = count + inc;
         setTimeout(UpdateCount, 200);
      }else{
        count.innerText = counNum;
      }
    };
    UpdateCount();
  })