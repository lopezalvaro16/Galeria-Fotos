const galeria = document.getElementById("galeria");

const carousel = (direccion) => {
  // - - - OBSERVER PARA SLIDES
  const opciones = {
    root: document.querySelector(".galeria__carousel"),
    rootMargin: "0px",
    threshold: 0.9, // Definimos un treshold del 90%
  };

  // El callback del observer se ejecutara cada que entren o salgan elementos del carousel.
  const observer = new IntersectionObserver((entradas) => {
    // Obtenemos los slides que son visibles.
    const slidesVisibles = entradas.filter((entrada) => {
      if (entrada.isIntersecting === true) {
        return entrada;
      }
    });

    // Comprobamos la direccion
    if (direccion === "atras") {
      const primerSlideVisible = slidesVisibles[0];
      const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);

      if (indexPrimerSlideVisible >= 1) {
        entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
    } else if (direccion === "adelante") {
      // Obtenemos el ultimo slide visible.
      const ultimoSlideVisible = slidesVisibles[slidesVisibles.length - 1];
      // Obtenemos el index del ultimo slide visible.
      const indexUltimoSlideVisible = entradas.indexOf(ultimoSlideVisible);

      // Comprobamos si hay mas slides despues del ultimo que detectamos.
      // entradas.lenght nos da la cantidad, pero queremos los index, asi que eliminamos 1 unidad.
      if (entradas.length - 1 > indexUltimoSlideVisible) {
        // En caso de que haya mas slidex, tomamos el siguiente y scrolleamos hacia el.
        entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
    }

    // Dejamos de observar los slides.
    galeria.querySelectorAll(".galeria__carousel-slide").forEach((slide) => {
      observer.unobserve(slide);
    });
  }, opciones);

  // Agregamos el observer a todos los slides
  galeria.querySelectorAll(".galeria__carousel-slide").forEach((slide) => {
    observer.observe(slide);
  });
};

export default carousel;
