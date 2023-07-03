import dataFotos from "./datos/fotos";
import { cargarImagen } from "./galeria/cargarImagen";

const contenedorCategorias = document.getElementById("categorias");
const galeria = document.getElementById("galeria");

contenedorCategorias.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.closest("a")) {
    galeria.classList.add("galeria--active");
    document.body.style.overflow = "hidden";

    const categoriasActiva = e.target.closest("a").dataset.categoria;
    galeria.dataset.categoria = categoriasActiva;

    const fotos = dataFotos.fotos[categoriasActiva];
    const carousel = galeria.querySelector(".galeria__carousel-slides");

    const { id, nombre, ruta, descripcion } = fotos[0];
    cargarImagen(id, nombre, ruta, descripcion);
    carousel.innerHTML = "";

    fotos.forEach((foto) => {
      const slide = `
    <a href="#" class="galeria__carousel-slide">
      <img
        class="galeria__carousel-image"
        src="${foto.ruta}"
        data-id = "${foto.id}"
        alt=""
      />
    </a>
      `;
      galeria.querySelector(".galeria__carousel-slides").innerHTML += slide;
    });
    galeria
      .querySelector(".galeria__carousel-slide")
      .classList.add("galeria__carousel-slide--active");
  }
});
