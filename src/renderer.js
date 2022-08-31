const $ = require('jquery');
const campo_nome = $("#campo_nome");
const campo_a = $("#campo_a");
const campo_b = $("#campo_b");
const campo_c = $("#campo_c");
const resultado = $("#resultado");

function CalculaMedida(a, b, c) {
  return (b * c) / a;
}

function CalculaMedidaExpressao(r, c , n) {
  return `${n} => ${c} => ${r.toFixed(2)} => ${(Math.round(r).toFixed(2))}`
}

$("#btn_calcular").on("click", (e) => {
  let campoNome = campo_nome.val();
  let campoA = campo_a.val();
  let campoB = campo_b.val();
  let campoC = campo_c.val();
  let resultadoCalculaMedida = CalculaMedida(campoA, campoB, campoC);
  let resultadoCalculaMedidaExpressao = CalculaMedidaExpressao(resultadoCalculaMedida, campoC, campoNome);
  resultado.text(resultadoCalculaMedidaExpressao);
});

$("#btn_limpar").on("click", (e) => {
  campo_nome.val("");
  campo_a.val("");
  campo_b.val("");
  campo_c.val("");
  resultado.text("0,0");
});

$("#btn_ajuda").on("click", (e) => {
  alert(`
    App calculador
    a --- c
    b --- x
    x=(b*c)/a
  `);
});