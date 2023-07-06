import cerrarGaleria from "./cerrarGaleria";
import slideClick from "./slideClick";
import { cargarAnteriorSiguiente } from "./cargarImagen";
import carousel from "./carousel";

const galeria = document.getElementById("galeria");
galeria.addEventListener("click", (e) => {
  const boton = e.target.closest("button");
  //--- Cerrar galeria
  if (boton?.dataset?.accion === "cerrar-galeria") {
    console.log("cerrar galeria");
    cerrarGaleria();
  }

  //--- Carousel slide click
  if (e.target.dataset.id) {
    slideClick(e);
  }

  //--- Siguente imagen
  if (boton?.dataset?.accion === "siguiente-imagen") {
    cargarAnteriorSiguiente("siguiente");
  }
  //--- Anterior imagen
  if (boton?.dataset?.accion === "anterior-imagen") {
    cargarAnteriorSiguiente("anterior");
  }

  //--- Carousel adelante
  if (boton?.dataset?.accion === "siguiente-slide") {
    carousel("adelante");
  }
  //--- Carousel atras
  if (boton?.dataset?.accion === "anterior-slide") {
    carousel("atras");
  }
});
