const galeria = document.getElementById("galeria");
const cerrarGaleria = () => {
  galeria.classList.remove("galeria--active");

  document.body.style.overflow = "";
};

export default cerrarGaleria;
