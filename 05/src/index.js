
module.exports = function() {
    router.post('/signup', SignUpRouterExpressAdapter);
}

// DTO / Adapter
module.exports = function SignUpRouterExpressAdapter(req, res) {

    const httpRequest = {
        body: req.body,
    }

    const { status, json } = SignUpController(httpRequest);

    if(status === 200) {
        res
            .status(status)
            .json(json);
    }
    else {
        res
            .status(status)
            .json(json);
    }
}

// Apresentation
module.exports = async function SignUpController(httpRequest) {
    const { email, password, repeatPassword } = httpRequest.body;
    
    // Regra de negócio
    const tryToCreateUser = await SignUpCase(email, password, repeatPassword);


    return (
        tryToCreateUser
        ? { status: 200, json: tryToCreateUser }
        : { status: 400, json: { error: 'a senha deve ser igual' }}
    );
}

// Domain - Regras de negócio
module.exports = async function SignUpCase(email, password, repeatPassword) {
    
    const isItValidPassword = password === repeatPassword;
    
    return (
        isItValidPassword
        ? await SignUpRepository(email, password)
        : false
    );
}
 
// Infra - Banco de dados
module.exports = async function SignUpRepository(email, password) {
    const mongoose = require('mongoose');
    mongoose.connect();
    
    const User = mongoose.model('User', { email: string, password: string });

    const registeredUser = await User.create({ email, password });

    return registeredUser;
}