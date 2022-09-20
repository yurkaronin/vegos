let menuButton = document.querySelector("#js-menu-btn");

// кнопка вызова мобильного меню
menuButton.addEventListener('click', function () {
  document.body.classList.toggle('mob-menu-open');
  // document.body.classList.toggle('custom-lock');
  // menuButton.classList.toggle('active');
  // mainMenu.classList.toggle('active');
  // searchButton.classList.remove('active');
  // headerSearch.classList.remove('active');
});
