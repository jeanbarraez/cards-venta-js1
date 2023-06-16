let pesos = 400000;

let cant = document.querySelector("#cantidad");

let colores = document.querySelector("#color");

let boton = document.querySelector("#calcular");

boton.addEventListener("click", () => {
  document.querySelector("#total").innerHTML = (
    cant.value * pesos
  ).toLocaleString();
  document.querySelector("#cantidad1").innerHTML = cant.value;
  document.querySelector("#backGround").style.backgroundColor = colores.value;
});

let borrar = document.querySelector("#papelera");

borrar.addEventListener("click", () => {
  document.querySelector("#total").innerHTML = 0;
  document.querySelector("#cantidad1").innerHTML = " ";
  document.querySelector("#cantidad").value = " ";
  document.querySelector("#color").value = " ";
  document.querySelector("#backGround").style.backgroundColor = "white";
});
