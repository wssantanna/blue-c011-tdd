
const UserFactory = require('../factories/user.factory');

module.exports = async function SignUpRepository(firstname, lastname, email) {

    try {
        const registeredUser = await UserFactory.Create({ firstname, lastname, email })
        
        return registeredUser;
    }
    catch (error) {
        return error;
    }
}