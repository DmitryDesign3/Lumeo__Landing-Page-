document.addEventListener("DOMContentLoaded", function () {
    // Получаем все кнопки категорий и карточки товаров
    const categoryButtons = document.querySelectorAll(".category-button");
    const productCards = document.querySelectorAll(".product-card");

    // Обработчик клика на кнопки категорий
    categoryButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Убираем активный класс у всех кнопок
            categoryButtons.forEach((btn) => btn.classList.remove("active"));
            // Добавляем активный класс к текущей кнопке
            button.classList.add("active");

            // Получаем выбранную категорию
            const selectedCategory = button.getAttribute("data-category");

            // Фильтруем карточки товаров
            productCards.forEach((card) => {
                const cardCategory = card.getAttribute("data-category");

                // Показываем карточки, которые соответствуют выбранной категории
                if (selectedCategory === "all" || cardCategory === selectedCategory) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});

// Показывать кнопку, когда прокручиваем вниз
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById("scrollToTop").style.display = "block";
    } else {
      document.getElementById("scrollToTop").style.display = "none";
    }
  };
  
  // Прокрутка страницы наверх при клике на кнопку
  document.getElementById("scrollToTop").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  