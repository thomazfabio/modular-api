const UserModel = require('../Model/UserModel') //importa o model user
const { use } = require('../Routes/UserRoutes')

module.exports = {
    setuser: (req, res) => {
        //criando nova instancia de User
        //dados para o User ( _Id, _first_name, _last_name, _email, _password, _phone) 
        //!Atenção valores não passados serão undefned e não serão nulo!
        let user = req.body
        UserN = new UserModel.User(user.Id, user.first_name, user.last_name, user.email, user.password, user.phone)
        let users = []
        users.push(UserN)
        console.log(UserN)

        res.send(users);
    },

    getuser: (req, res) => {
        res.send(UserModel)
    }
}




