//hello6.js
const fs = require("fs");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var nomes = [];

var nome_arquivo = [];  

var lib_cadastro = require("./cadastro");

rl.question("Digite o nome do arquivo : \n",function(nome_a){
  nome_arquivo.push(nome_a);  
  leianome(3);
});


function leianome(count){
   
if(count--){
    rl.question("Digite 3 nomes:\n",function(line){
      nomes.push(line);
      leianome(count);
    });
  }else  lib_cadastro.cadastrar(nomes,nome_arquivo);
;
}



// chamar a função

