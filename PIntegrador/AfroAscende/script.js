 const carousel = document.getElementById("carousel");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    const totalImages = carousel.children.length;

    let index = 0;

    function getImagesPerSlide() {
      if (window.innerWidth < 640) return 1;      // celular
      if (window.innerWidth < 1024) return 2;     // tablet
      return 4;                                   // desktop
    }

    function updateCarousel() {
      const imagesPerSlide = getImagesPerSlide();
      const totalSlides = Math.ceil(totalImages / imagesPerSlide);
      carousel.style.transform = `translateX(-${index * 100}%)`;

      // Evita deslizar além do limite
      if (index >= totalSlides) index = 0;
    }

    next.addEventListener("click", () => {
      const imagesPerSlide = getImagesPerSlide();
      const totalSlides = Math.ceil(totalImages / imagesPerSlide);
      index = (index + 1) % totalSlides;
      carousel.style.transform = `translateX(-${index * 100}%)`;
    });

    prev.addEventListener("click", () => {
      const imagesPerSlide = getImagesPerSlide();
      const totalSlides = Math.ceil(totalImages / imagesPerSlide);
      index = (index - 1 + totalSlides) % totalSlides;
      carousel.style.transform = `translateX(-${index * 100}%)`;
    });

    // Atualiza automaticamente se a janela for redimensionada
    window.addEventListener("resize", updateCarousel);