document.addEventListener("DOMContentLoaded", () => {
  // Открытие и закрытие меню
  const menuToggle = document.getElementById("menu-toggle");
  const menuContent = document.getElementById("menu-content");
  const closeMenuBtn = document.getElementById("close-menu");

  menuToggle.addEventListener("click", () => {
    if (menuContent.style.display === "block") {
      menuContent.style.display = "none";
    } else {
      menuContent.style.display = "block";
    }
  });

  closeMenuBtn.addEventListener("click", () => {
    menuContent.style.display = "none";
  });

  // Попапы
  const buttons = document.querySelectorAll(".minecraft-button");
  const popups = document.querySelectorAll(".popup");
  const closeButtons = document.querySelectorAll(".close-popup");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const popupId = btn.getAttribute("data-popup");
      const popup = document.getElementById(popupId);
      if (popup) {
        popup.style.display = "flex";
      }
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".popup").style.display = "none";
    });
  });

  // Закрытие попапа по клику вне контента
  popups.forEach((popup) => {
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  });

  // Убираем подтверждение при перезагрузке / закрытии вкладки
  window.onbeforeunload = null;
});
