function toggleMenu() {
  const menu = document.getElementById("menuMobile");
  const overlay = document.getElementById("overlay");
  const isOpen = menu.classList.contains("show");

  if (isOpen) {
    fecharMenu();
  } else {
    menu.classList.add("show");
    overlay.classList.add("show");
  }
}

function fecharMenu() {
  document.getElementById("menuMobile").classList.remove("show");
  document.getElementById("overlay").classList.remove("show");
}
