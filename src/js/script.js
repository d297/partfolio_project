let nav = document.querySelector(".menu__items");
nav.addEventListener("click", addActiveClass);

function addActiveClass(e) {
  let menuItem = e.target;
  if (menuItem.tagName === "A") {
    removeActiveClass(nav);
    menuItem.classList.add("active");
  }
}

function removeActiveClass(menu) {
  let allItemsMenu = menu.querySelectorAll(".menu__item-link");
  allItemsMenu.forEach((item) => {
    item.classList.remove("active");
  });
}
