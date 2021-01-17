document.addEventListener("DOMContentLoaded", function () {
  const docEl = document.documentElement;
  const screenWidth = window.innerWidth;

  const menuBtn = document.querySelector(".header__burger");
  const menuBox = document.querySelector(".header__menu");
  const menuItems = document.querySelectorAll(".header__menu-item");
  const mainInner = document.querySelector(".main__inner");
  const container = document.querySelector(".container");
  const shadowTitles = document.querySelectorAll(".global-shadowtitle");
  const arrowDown = document.querySelector(".main__down-arrow");
  const arrowsDown = document.querySelectorAll(".down-arrow");
  const headerInner = document.querySelector(".header__inner");
  const mainInnerWidth = window.getComputedStyle(mainInner).width;
  const headerInnerWidth = window.getComputedStyle(headerInner).width;
  // const bgBoxes = document.querySelectorAll(".bg-box");

  // const servicesItems = document.querySelectorAll(".services__item");
  // const sectionLines = document.querySelectorAll(".section__vertical-line");

  // sectionLines.forEach((line, i) => {
  //   if (i === 0) {
  //     line.style.left = `
  //       ${
  //         parseFloat(window.getComputedStyle(servicesItems[0]).width) +
  //         parseFloat(window.getComputedStyle(servicesItems[1]).marginLeft) +
  //         parseFloat(
  //           window.getComputedStyle(container).marginLeft +
  //             parseFloat(window.getComputedStyle(container).paddingLeft)
  //         ) +
  //         "px"
  //       }
  //     `;
  //   }
  // });

  

  const arrangeArrows = () => {
    arrowsDown.forEach((arrow, i) => {
      if (window.innerWidth >= 1500) {
        if (i === 0) {
          arrow.style.right = `
          ${
            -(parseFloat(headerInnerWidth) - parseFloat(mainInnerWidth)) / 2 +
            "px"
          }
          `;
        } else {
          arrow.style.right = `
            ${window.getComputedStyle(headerInner).marginRight}
          `;
        }
      } else if (window.innerWidth >= 1250 && window.innerWidth < 1500) {
        if (i === 0) {
          arrow.style.right = "0";
        } else {
          arrow.style.right = "30px";
        }
      } else if (window.innerWidth >= 768 && window.innerWidth < 1250) {
        if (i === 0) {
          arrow.style.right = "-30px";
        } else {
          arrow.style.right = "30px";
        }
      } else {
        arrow.style.right = "41%";
        arrow.style.bottom = "5px";
        // arrow.style.transform = "translateX(50%)";
      }
    });
  };

  const startInit = () => {
    shadowTitles.forEach((st) => {
      st.textContent = st.parentElement.textContent;
    });
    window.addEventListener("resize", arrangeArrows);
    arrangeArrows();
  };
  const menuOut = () => {
    menuBox.classList.remove("in");
    menuBox.classList.add("out");
    menuBtn.style.cssText = "position: static;";
    mainInner.style.paddingRight = "0";
  };

  const menuIn = () => {
    menuBox.classList.remove("out");
    menuBox.classList.add("in");
    menuBtn.style.cssText = "position: relative; z-index: 9999;";
    if (window.innerWidth >= 1024 && !(document.querySelector('.cases-page__wrapper'))) {
      mainInner.style.paddingRight = `
      ${
        parseFloat(window.getComputedStyle(menuBox).width) -
        parseFloat(window.getComputedStyle(menuBox).width) / 3 +
        "px"
      }
      `;
    }
  };

  menuBtn.addEventListener("click", () => {
    if (menuBox.classList.contains("out") && !(document.querySelector('.cases-page__wrapper'))) {
      menuIn();
    } else {
      menuOut();
    }
  });

  menuItems.forEach((li) => {
    li.addEventListener("mouseenter", () => {
      if (window.innerWidth >= 770) {
        li.querySelector(".header__menu-link").classList.add("active");
        li.querySelector(".header__menu-line").classList.add("active");
        li.querySelector(".header__menu-dot").classList.add("active");
      }
    });
    li.addEventListener("mouseleave", () => {
      if (window.innerWidth >= 770) {
        li.querySelector(".header__menu-link").classList.remove("active");
        li.querySelector(".header__menu-line").classList.remove("active");
        li.querySelector(".header__menu-dot").classList.remove("active");
      }
    });
  });

  startInit();
});

$(function () {
  new WOW().init();
});
