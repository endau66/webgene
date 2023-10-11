// aos
AOS.init();

// fixed header  ------------------------------------------
window.addEventListener("scroll", function () {
  const kv = document.querySelector(".kv");
  const header = document.querySelector("#header");
  const kvBottom = kv.getBoundingClientRect().bottom;

  if (kvBottom <= 0) {
    header.classList.add("header-fixed");
  } else {
    header.classList.remove("header-fixed");
  }
});
// fixed header end ------------------------------------------

// header nav change ------------------------------------------
var navList = document.querySelector(".navList");
var sections = document.querySelectorAll("section");
var headerHeight = document.querySelector("header").offsetHeight;

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  sections.forEach(function (section) {
    var rect = section.getBoundingClientRect();

    var sectionTop = rect.top + scrollPosition - headerHeight;
    var sectionBottom = rect.bottom + scrollPosition - headerHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      navList.querySelectorAll("a").forEach(function (link) {
        link.classList.remove("active");
      });
      var link = navList.querySelector('a[href="#' + section.id + '"]');
      if (link) {
        link.classList.add("active");
      }
    }
  });
});
// header nav change end ----------------------------------------

// hamburger star ------------------------------------------
const toggleBar = document.querySelector("#hambuger-contain");
const nav = document.querySelector(".nav_ham");
const menuBg = document.querySelector("#menu-bg");
const body = document.querySelector("body");

const toChange = () => {
  toggleBar.classList.toggle("change");
  nav.classList.toggle("change");
  menuBg.classList.toggle("change-bg");

  // check change-bg
  if (menuBg.classList.contains("change-bg")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
};

toggleBar.addEventListener("click", toChange);
nav.addEventListener("click", toChange);
// hamburger end ------------------------------------------

// form表單
const inputBoxContainers = document.querySelectorAll(".input_box");
const textareaElement = document.querySelector(".input_textarea");

inputBoxContainers.forEach((container) => {
  const inputElement = container.querySelector(".input_txt");

  container.addEventListener("click", () => {
    container.classList.add("active");
    inputElement.focus();
  });

  inputElement.addEventListener("blur", () => {
    if (inputElement.value.trim() === "") {
      container.classList.remove("active");
    }
  });

  if (inputElement.value.trim() !== "") {
    container.classList.add("active");
  }
});

textareaElement.addEventListener("click", () => {
  textareaElement.classList.add("active");
});

// 輪播
const config = {
  type: "carousel",
  startAt: 0,
  focusAt: "center",
  perView: 3,
  //   gap: 20,
  autoplay: 5000,
  breakpoints: {
    1200: {
      perView: 3,
    },
    820: {
      perView: 2,
    },
    768: {
      perView: 2,
    },
    434: {
      perView: 1,
    },
  },
};

new Glide(".glide", config).mount();
