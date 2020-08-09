// PROCURANDO NO DOCUMENTO PELO ELEMENTO DESCRITO PELA ID E EM SEGUIDA SELECIONANDO O TIPO DE EVENTO E A
// A RESPECTIVA AÇÃO QUE ELE IRÁ DESENCADEAR.
// NESSE CASO AO SER 'CLICADO' O BOTÃO add-time IRÁ DUPLICAR O CAMPO DE HORÁRIOS
document.querySelector("#add-time").addEventListener("click", cloneField);

function cloneField() {
  const newFieldContainer = document
    .querySelector(".schedule-item");
    .cloneNode(true);

  const fields = newFieldContainer.querySelectorAll("input");

  const ok = [];

  fields.forEach(function(field) {
    field.value = "";
  });

  document.querySelector("#schedule-item").appendChild(newFieldContainer);
}
