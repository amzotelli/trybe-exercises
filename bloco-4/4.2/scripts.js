let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
let numeroDeItens = 0;

for (let number of numbers) {
  resultado += number; 
  numeroDeItens += 1;
}

let media = resultado/numeroDeItens;

if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

for (let index=0; index < numbers.length;index+= 1){ 
  

}
