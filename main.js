document.addEventListener("DOMContentLoaded", function() {
    const descriptions = document.querySelectorAll(".description");
  
    descriptions.forEach((description, index) => {
      // Сначала скрываем элементы
      description.style.opacity = 0;
      description.style.transition = "opacity 1s ease-in-out"; // Плавность
  
      // Задержка перед появлением каждого элемента (опционально)
      setTimeout(() => {
        description.style.opacity = 1; // Показываем элемент
      }, 200 * index); // Задержка увеличивается для каждого элемента
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const descriptions = document.querySelectorAll(".descriptionnumbertwo");
  
    descriptions.forEach((description, index) => {
      // Сначала скрываем элементы
      description.style.opacity = 0;
      description.style.transition = "opacity 1s ease-in-out"; // Плавность
  
      // Задержка перед появлением каждого элемента (опционально)
      setTimeout(() => {
        description.style.opacity = 1; // Показываем элемент
      }, 200 * index); // Задержка увеличивается для каждого элемента
    });
  });
document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll(".scroll-link");
  
    scrollLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке (стандартное поведение)
  
        const targetId = this.getAttribute("href").substring(1); // Получаем ID элемента из href (убираем #)
        const element = document.getElementById(targetId);
  
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          console.error("Элемент с ID '" + targetId + "' не найден.");
        }
      });
    });
  });
document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll(".scroll-links");
  
    scrollLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке (стандартное поведение)
  
        const targetId = this.getAttribute("href").substring(1); // Получаем ID элемента из href (убираем #)
        const element = document.getElementById(targetId);
  
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          console.error("Элемент с ID '" + targetId + "' не найден.");
        }
      });
    });
  });
  