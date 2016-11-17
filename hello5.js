//hello5.js
const fs = require("fs");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var nomes = [];

var nome_arquivo = [];  

rl.question("Digite o nome do arquivo : \n",function(nome_a){
	nome_arquivo.push(nome_a);	
	leianome(5);
});


function leianome(count){
   
if(count--){
    rl.question("Digite 5 paises:\n",function(line){
      nomes.push(line);
      leianome(count);
    });
  }else gravaarquivo();
}

function gravaarquivo(){
 
  for(var i  = 1 in nomes)
 
   fs.appendFile(nome_arquivo[0]+'.txt',nomes[i]+"\n");

  rl.close();
  console.log("Arquivo " + nome_arquivo[0]+".txt salvo!");
}

// chamar a função

