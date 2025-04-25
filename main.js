document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const sideMenu = document.getElementById("side-menu");
  
    menuBtn.addEventListener("click", () => {
      const isOpen = sideMenu.style.left === "0px";
      sideMenu.style.left = isOpen ? "-250px" : "0px";
    });
  
    const carouselElement = document.querySelector('#carouselExampleIndicators');
    const myCarousel = new bootstrap.Carousel(carouselElement, {
      interval: 5000, // Puedes ajustar o quitar para desactivar autoplay
      wrap: true      // Esto permite que se reinicie al llegar al final
    });
  });
  