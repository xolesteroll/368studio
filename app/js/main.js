const menuBtn = document.querySelector(".header__burger");
const menuBox = document.querySelector(".header__menu");
const menuItems = document.querySelectorAll(".header__menu-item");
const mainInner = document.querySelector(".main__inner");
const container = document.querySelector(".container");
const shadowTitles = document.querySelectorAll(".global-shadowtitle");
const arrowDown = document.querySelectorAll(".down-arrow");
const headerInner = document.querySelector(".header__inner");

console.log(window.getComputedStyle(headerInner).marginRight);

const startInit = () => {
  mainInner.style.width = `
    ${window.getComputedStyle(mainInner).width}
    `;
  shadowTitles.forEach((st) => {
    st.textContent = st.parentElement.textContent;
  });
  arrowDown.forEach((arrow) => {
    if (parseFloat(window.getComputedStyle(headerInner).marginRight) !== 0) {
      arrow.style.right = window.getComputedStyle(headerInner).marginRight;
    } else {
      arrow.style.right = "30px";
    }
  });
};
const menuOut = () => {
  menuBox.classList.remove("in");
  menuBox.classList.add("out");
  menuBtn.style.cssText = "position: static;";
  mainInner.style.width = `100%
    `;
};

const menuIn = () => {
  const containerMarginRight = window.getComputedStyle(container).marginRight;
  menuBox.classList.remove("out");
  menuBox.classList.add("in");
  menuBtn.style.cssText = "position: relative; z-index: 9999;";
  mainInner.style.width = `
    ${
      parseFloat(window.getComputedStyle(mainInner).width) -
      parseFloat(window.getComputedStyle(menuBox).width) +
      parseFloat(containerMarginRight) +
      "px"
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
  console.log(li);
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
