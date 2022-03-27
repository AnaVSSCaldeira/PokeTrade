/*
Sistema de simulação de troca Pokémon!
Escolha até 6 pokémons para realizar uma troca. Se o nivel base de experiência tiver uma diferença de até 5 unidades a troca não poderá ser realizada.
*/
const BASEURL = 'https://pokeapi.co/api/v2/pokemon/';
var pokemon; //guarda os dados recebidos na API
var valor1;
var valor2;

//funcao de verificar troca
function verificar_troca(){

	if((valor1==valor2) || ((valor1<=(valor2+5)) && (valor1>=(valor2-5)))){
		console.log('Troca justa');
		console.log(valor1,valor2);
	}
	else if(valor1===undefined){
		valor1=0;
	}
	else if(valor2===undefined){
		valor2=0;
	}
	else{
		console.log('Troca injusta');
		console.log(valor1,valor2);
	}
}

function procurar_pokemon(url, name) {
	fetch(url+name)
		.then(response => response.json())
		.then(data => {
		pokemon = data;
		})
		.catch(err => console.log(err));
		let base_exp = pokemon.base_experience;
	return base_exp;
}


const lado1=document.querySelectorAll('.lado1');
const lado2=document.querySelectorAll('.lado2');

function confirmar(lado=null){
	const lista=[];
	let soma=0;
	let base;
	let INPUTLEGAL;
	if(lado==1){
		for (i=0; i<6; i++){
			INPUTLEGAL = document.getElementById(lado1[i].id);
			if(INPUTLEGAL.value){
				base = procurar_pokemon(BASEURL, INPUTLEGAL.value);
				lista.push(base);
				soma += lista[i];
			}
		}
		var num1=document.getElementById("lado1");
		num1.innerHTML=soma;
		valor1=soma;
	}
	else if(lado==2){
		for (i=0; i<6; i++){
			INPUTLEGAL = document.getElementById(lado2[i].id);
			if(INPUTLEGAL.value){
				base = procurar_pokemon(BASEURL, INPUTLEGAL.value);
				lista.push(base);
				soma += lista[i];
			}
		}
		var num2=document.getElementById("lado2");
		num2.innerHTML=soma;
		valor2=soma;
	}
	console.log(lista);
	console.log(soma);
}

let soma=document.getElementById("botao-troca").addEventListener("click",verificar_troca);