const menuBtn = document.querySelector(".header__burger");
const menuBox = document.querySelector(".header__menu");
const menuItems = document.querySelectorAll(".header__menu-item");
const mainInner = document.querySelector(".main__inner");
const container = document.querySelector(".container");
const shadowTitles = document.querySelectorAll(".global-shadowtitle");
const arrowDown = document.querySelectorAll(".down-arrow");
const headerInner = document.querySelector(".header__inner");
const mainInnerWidth = window.getComputedStyle(mainInner).width;
const headerInnerWidth = window.getComputedStyle(headerInner).width;



const startInit = () => {
  shadowTitles.forEach((st) => {
    st.textContent = st.parentElement.textContent;
  });
  arrowDown.forEach((arrow) => {
    arrow.style.right = `
       ${
         -(parseFloat(headerInnerWidth) -
         parseFloat(mainInnerWidth)) / 2 +
         "px"
       }
    `;
  });
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
  mainInner.style.paddingRight = `
    ${
      parseFloat((window.getComputedStyle(menuBox).width)) - 
      parseFloat((window.getComputedStyle(menuBox).width)) / 3 +
      'px'
    }
    `;
};

menuBtn.addEventListener("click", () => {
  if (menuBox.classList.contains("out")) {
    menuIn();
  } else {
    menuOut();
  }
});

menuItems.forEach((li) => {
  li.addEventListener("mouseenter", () => {
    li.querySelector(".header__menu-link").classList.add("active");
    li.querySelector(".header__menu-line").classList.add("active");
    li.querySelector(".header__menu-dot").classList.add("active");
  });
  li.addEventListener("mouseleave", () => {
    li.querySelector(".header__menu-link").classList.remove("active");
    li.querySelector(".header__menu-line").classList.remove("active");
    li.querySelector(".header__menu-dot").classList.remove("active");
  });
});

startInit();
