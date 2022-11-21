const SignUpRepository = require('../infra/repositories/signup.repository');

module.exports = async function SignUpCase(firstname, lastname, email) {
    
    const regEx = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i;

    const isItValidEmail = regEx.test(email);

    try {
        if(isItValidEmail) {
            return await SignUpRepository(firstname, lastname, email)
        }
        else {
            throw 'O e-mail não é válido';
        }
    }
    catch(error) {

        return error;
    }
    
}