/*
const DbContext = require('../db.context');

const { DataType } = DbContext;

const User = DbContext.define('User', {
    firstname: DataType.STRING,
    lastname: DataType.STRING,
    email: {
        unique: 'compositeIndex',
        type: DataType.STRING
    }
});
*/

const UserFactory = {

    Create: async (userRegistration) => {

        if(userRegistration.email == "javare@gmail.com") {
            throw "Usuário já possui um cadastro."
        }
        else {
            return userRegistration 
        }
    }
} 

module.exports = UserFactory;