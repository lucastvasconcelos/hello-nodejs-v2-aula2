const fs = require("fs");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const gravaarquivo = {
	cadastrar : function(nomes,nome_arquivo){
	for(var i  = 1 in nomes)
 		fs.appendFile(nome_arquivo[0]+'.txt',nomes[i]+"\n");
	rl.close();
  	return ("Arquivo " + nome_arquivo[0]+".txt salvo!");
}
}

module.exports = gravaarquivo;
