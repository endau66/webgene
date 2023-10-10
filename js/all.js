// header
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

//
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

// 輪播
const config = {
  type: "carousel",
  startAt: 0,
  focusAt: "center",
  perView: 3,
  //   gap: 20,
  //   autoplay: 5000,
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
