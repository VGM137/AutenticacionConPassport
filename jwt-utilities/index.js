const jwt = require('jsonwebtoken');

//Vamos a sacar nuestros argumentos haciendo uso de process argument  los primeros dos elementos que no estamos definiendo en el proceso de node y el archivo que estamos leyendo, iniciamos con el tercero que son las opciones
const [, , option, secret, nameOrToken] = process.argv //v de vector

if(!option || !secret || !nameOrToken){
  return console.log('Missing arguments')
}

function signToken (payload, secret){
  return jwt.sign(payload, secret);
}

function verifyToken (token, secret){
  return jwt.verify(token, secret);
}

if(option === 'sign'){
  console.log(signToken({ sub: nameOrToken }, secret));
}else if( option === 'verify'){
  console.log(verifyToken(nameOrToken, secret))
}else{
  console.log('Options needs to be "sign" or "verify"')
}
