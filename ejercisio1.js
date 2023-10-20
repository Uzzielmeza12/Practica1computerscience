function obtenerPaisMasLargo(paises) {
    let paisMasLargo = "";
    let numeroDeLetras = 0;

    for (let i = 0; i < paises.length; i++) {
      if (paises[i].length > numeroDeLetras) {
        numeroDeLetras = paises[i].length;
        paisMasLargo = paises[i];
      }
    }

    return paisMasLargo;
  }

  const paises = ["México", "Guatemala", "El Salvador", "Panamá"];
  const paisMasLargo = obtenerPaisMasLargo(paises);

  document.getElementById("paisMasLargo").textContent = paisMasLargo;