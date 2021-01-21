
function clicou(){
      document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
      
      //console.log(document.getElementById("agradecimento"));
      //alert("Obrigado por clicar");
}

function redirecionar(){
      window.open("http://ww1.globallabs.academy/");
      //window.location.href = "http://ww1.globallabs.academy/s";
}

function trocar(elemento){
      elemento.innerHTML = "Obrigado por passar  mouse";
      //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
      //salert("trocar texto");
}

function voltar(elemento){
      elemento.innerHTML = "Passe o mouse aqui";
      //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";

}

function load(){
      alert("pagina carregada");
}

function funcaoChange(elemento){
      console.log(elemento.value);
}

/*
function soma(n1, n2){s
      return n1 + n2;
}
*/
/*function setReplace(frase, nome, novo_nome){
      return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Flamengo", "Flamengo", "Brasil"));
*/

/*
var validar;
function validarIdade(idade){
      if(idade >= 18){
            validar = true
      } else{
            validar = false
      }
      return validar;
}

var idade = prompt("Qual sua idade?");
validarIdade(idade);
console.log(validar);
*/


/*var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes);
*/
/*
var count;
for(count=0; count <=5; count++){
      alert(count);
};
*/

/*
var count = 0;
while (count < 5){
      console.log(count);
      count ++;
};
*/

/*
var idade = prompt("Qual sua idade:");
if (idade >= 18){
      alert("maior de idade");
}else{
      alert("menor de idade");
};
*/
/*
var frutas = [{nome:"maça", cor:"vermelho"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelho"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));


/*var nome = "Lázaro Alves";
var idade = 36;
var frase = "America é o time de maior torcida do mundo";
alert(nome + " tem " + idade + " anos");

console.log(nome);
console.log(idade);
//console.log(frase.replace("America", "Flamengo"));
//console.log(frase.toUpperCase());
console.log(frase.toLocaleLowerCase());
*/