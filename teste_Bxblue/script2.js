/*
Sistema de simulação de troca Pokémon!
Escolha até 6 pokémons para realizar uma troca. Se o nivel base de experiência tiver uma diferença de até 5 unidades a troca não poderá ser realizada.
*/
const BASEURL = 'https://pokeapi.co/api/v2/pokemon/';
/*
fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
*/
//funcao de verificar troca
function verificar_troca(v1,v2){
	if(v1==v2){
		alert('Troca realizada');
	}
	else if((v1<=(v2+5)) && (v1>=(v2-5))){
		alert('Troca realizada');
	}
	else{
		alert('Troca nao realizada');
	}
}

function requestPokeInfo(url, name) {
  fetch(url +name)
    .then(response => response.json())
    .then(data => {
      pokemon = data;
    })
    .catch(err => console.log(err));
	
	console.log(pokemon);
}

/*
function confirmar(){
	lista1=[];
	//lista2=[0,0,0,0,0,0];

	for (i=0;i<6;i++){
		//console.log(POKEINPUT[i].value);
		POKEINPUT[i].id;
		var base=procurar_pokemon(BASEURL, POKEINPUT[i].value);
		//console.log(base);
		if(base!=undefined || base!=null){
			lista1.push(base);
		}
		console.log(lista1);
	}	

}
*/

//funcao para cnfirmar o pokemon
function confirmar(){
	console.log('Apertou!')
	alert(POKEINPUT.value)
	pokenome = POKEINPUT.value;
	requestPokeInfo(BASEURL, pokenome);
}

//const BUTTONS = document.querySelectorAll('.card')
//const PESQUISA=document.querySelectorAll('.search');
//const POKEINPUT=document.getElementById("input1");

const POKEINPUT=document.getElementsByClassName('.search');
const BOTAO=document.querySelectorAll('.confirm');

BOTAO.forEach(btn =>{
	btn.addEventListener('click', confirmar)
})

var pokenome;
var pokemon;

let num1=document.getElementById("lado1");
let num2=document.getElementById("lado2");

valor1=0;
valor2=0;

num1.innerHTML=valor1;
num2.innerHTML=valor2;

let btn_troca=document.getElementById("botao-troca").addEventListener("click",verificar_troca);