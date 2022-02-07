export const idadeMaiorMenor = pessoas => ( 
  pessoas.reduce(function(valorAcumulado, valorArray) {
    const propVerificaIdade = valorArray.idade >= 18 ?
    'maiorIdade' : 'menorIdade';
    
    valorAcumulado[propVerificaIdade].push(valorArray);

    return valorAcumulado;
  }, {maiorIdade: [], menorIdade: []})
);


