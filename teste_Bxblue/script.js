/*
Sistema de simulação de troca Pokémon!
Escolha até 6 pokémons para realizar uma troca. Se o nivel base de experiência tiver uma diferença de até 5 unidades a troca não poderá ser realizada.
*/
const BASEURL = 'https://pokeapi.co/api/v2/pokemon/';

//funcao de verificar troca
function verificar_troca(v1,v2){

	if((v1==v2) || ((v1<=(v2+5)) && (v1>=(v2-5)))){
		console.log('Troca realizada');
		console.log(v1,v2);
	}
	else{
		console.log('Troca nao realizada');
		console.log(v1,v2);
	}
}

function procurar_pokemon(url, name) {
  fetch(url+name)
    .then(response => response.json())
    .then(data => {
      pokemon = data;
    })
    .catch(err => console.log(err));
	
	//pegar a xp base do pokemon e verificar
	let valor=pokemon.base_experience;
	//console.log(valor);
	//console.log(url+name);
	return valor;
}

//funcao para confirmar o pokemon

const POKEINPUT=document.querySelectorAll('.search');
function confirmar(){
	let lista1=[];
	let soma=0;
	//lista2=[0,0,0,0,0,0];
	for (i=0;i<6;i++){
		let INPUTLEGAL = document.getElementById(POKEINPUT[i].id);
		//console.log(INPUTLEGAL.value);
		/*console.log(POKEINPUT[i].id);
		console.log(POKEINPUT[i].value);*/
		//console.log(typeof(INPUTLEGAL.value));
		console.log(INPUTLEGAL.value);
		if(INPUTLEGAL.value!=undefined){
			let base=procurar_pokemon(BASEURL, INPUTLEGAL.value);
			lista1.push(base);
			soma += lista1[i];
		}
		//console.log(base);
	}
	console.log(lista1);
	console.log(soma);
	return soma;
	
	//lista
}
/*
POKEINPUT.forEach(input =>{
	input.addEventListener('click', confirmar)
})
*/
var pokenome; //var para pegar o nome do pokemon no input
var pokemon; //guarda os dados recebidos na API

let num1=document.getElementById("lado1");
let num2=document.getElementById("lado2");

/*
valor1=${pokemon.base_experience};
valor2=${pokemon.base_experience};
*/
valor1=0;
valor2=0;

num1.innerHTML=valor1;
num2.innerHTML=valor2;

let total=document.getElementById("b1").addEventListener("click",confirmar);
console.log(total)

let btn_troca=document.getElementById("botao-troca").addEventListener("click",verificar_troca.bind(null,valor1,valor2));

//let btn_confirma=document.getElementById(ID).addEventListener("click",confirmar);