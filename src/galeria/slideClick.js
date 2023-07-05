import datos from "./../datos/fotos";
import { cargarImagen } from "./cargarImagen";

const slideClick = (e) => {
  let ruta, nombre, descripcion;
  const id = parseInt(e.target.dataset.id);
  const galeria = document.getElementById("galeria");
  const categoriasActiva = galeria.dataset.categoria;

  datos.fotos[categoriasActiva].forEach((foto) => {
    if (foto.id === id) {
      ruta = foto.ruta;
      nombre = foto.nombre;
      descripcion = foto.descripcion;
    }
  });
  cargarImagen(id, nombre, ruta, descripcion);
};
export default slideClick;
