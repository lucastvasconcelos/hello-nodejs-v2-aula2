//hello3.js
const readline = require('readline');

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question("Digite um número \n",(num) => {
	if (isNaN(num))
		console.log(`${num} não é um número válido`);
	else
		console.log(`Você digitou o número ${num}`);
	r1.close();
});
