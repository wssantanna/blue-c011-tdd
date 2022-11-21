
// Error

// Trata esse Error/Excessão

function validarIdade(idade) {
   if(idade >= 18) {
       console.log('Seja bem vindo') 
   }
   else {
       throw 'Não pode frequentar este local'; 
   }
}

try {
    validarIdade(17);
}
catch(error) {
    console.log(error);
}

console.log('Próxima linha');

/*

function validarIdade(idade) {
    return (idade >= 18) // true / false
}

if(validarIdade(17)) {
    console.log('Seja bem vindo')
}
else {
    console.log('Infelizmente você não pode frequentar este local')
}
*/
