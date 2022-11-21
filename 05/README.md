# Express: Fragmentado as responsabilidades da API

## Código-fonte inicial

Como só podemos testar funções capazes de retornar valores, neste exemplo não poderiamos testá-la.  

```js
// server.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

module.exports = function() {
    router.post('/signup', (req, res) => {
        
        const { email, password, repeatPassword } = req.body;
        
        mongoose.connect();
            
        const User = mongoose.model('User', { email: string, password: string });


        if(password === repeatPassword) {
            const userFound = User.create();
            res
                .status(200)
                .json(userFound);
        }
        else {
            res
                .status(400)
                .json({ error: 'a senha deve ser igual' });
        }
    });
}
```

## Infra

-[ ] DEVE retornar o usuário registrado QUANDO receber um registro que não possua nenhum outro cadastro com mesmo e-mail

-[ ] DEVE disparar um error "Usuário cadastrado" QUANDO houver um registro de cadastro com mesmo e-mail no banco de dados

-[ ] DEVE disparar um error "Não foi possível realizar o cadastro" QUANDO o servidor não consegui registrar os dados no banco de dados

```js
const mongoose = require('mongoose');

module.exports = async function SignUpRepository(email, password) {
    
    mongoose.connect();
    
    const UserModel = mongoose.model('User', { email: string, password: string });

    try {

        const itWasRegistered = await UserModel.create({ email, password });
    
        if(itWasRegistered) {

            const userRegistered = itWasRegistered;

            return userRegistered;
        }
        else {

            throw 'Usuário já possui cadastrado';
        }
    }
    catch {

        throw 'Não foi possível realizar o cadastro';
    }
}
```

## Domain

```js
module.exports = async function SignUpCase(email, password, repeatPassword) {
    
    try {

        const isItValidPassword = password === repeatPassword;

        if(isItValidPassword) {

            const userRegistered = await SignUpRepository(email, password)

            return userRegistered;
        }
        else {
            
            throw 'As senhas precisam ser identicas'
        }
    }
    catch(error) {

        throw error;
    }
}
```

## Apresentation

```js
module.exports = async function SignUpController(httpRequest) {
    
    const { email, password, repeatPassword } = httpRequest.body;
    
    try {

        const tryToCreateUser = await SignUpCase(email, password, repeatPassword);
        
        return { status: 200, json: tryToCreateUser }
    }
    catch(error) {

        return { status: 400, json: error}
    }

}
```

## Adapter

```js

```
