
const SignUpCase = require('../domain/signup.case');

module.exports = async function SignUpController(httpRequest) {

    const { firstname, lastname, email } = httpRequest.body;

    const tryToCreateUser = await SignUpCase(firstname, lastname, email);

    let response;

    if(tryToCreateUser == "Usuário já possui um cadastro.") {
        response = { status: 409, json: tryToCreateUser };
    }
    else if(tryToCreateUser == "O e-mail não é válido") {
        response = { status: 400, json: tryToCreateUser };
    }
    else {
        response = { status: 201, json: tryToCreateUser }
    }

    return response;
}