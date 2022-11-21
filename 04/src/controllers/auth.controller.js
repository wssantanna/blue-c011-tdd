
const authController = (req, res) => {

    const {username, password} = req.body;

    if(username == 'wssantanna' && password == '1234') {
        res
        .status(200)
        .send({
            token: '',
            user: {
                id: 1,
                name: '',
            }
        })
    }

    res.status(401);

}

module.exports = authController; 