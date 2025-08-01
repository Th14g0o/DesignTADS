// document.getElementById('muda-a-cor').onclick = function(){ mudacor() }
// // getElementById pega um elemento com o mesmo id que esta entre ''. onclick é uma propriedade dos elementos, um aevento acionado quando se clica sobre ele
// function mudacor(){
//     document.getElementsByClassName('mudafonte')[0].style.fontFamily = 'arial';
//     // pega elementos que tenha a mesma classe em ''. [0] é para "filtrar", pegar o primeiro elemento com essa classe. getElementsByClassName retorna uma lista de elementos;
//     // style é a propriedade que tem as propriedades css do elemento
//     document.getElementById('texto').style.backgroundColor = 'gray';
//     document.getElementById('mudafonte').style.innerHTML = 'A cor de fundo mudou';
// }

document.getElementById('mudar-cor').onclick = function() {mudacor()}
function mudacor(){
    document.getElementById('lorem2').style.backgroundColor='gray';
    document.getElementById('lorem2').innerHTML='Mudou a Cor';
    document.getElementsByClassName('lorem-class')[0].style.color = "orange";
    document.getElementsByClassName('lorem-class')[1].style.color = "yellow";
}