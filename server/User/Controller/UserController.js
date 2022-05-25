const UserModel = require('../Model/UserModel') //importa o model user

module.exports = {
    setuser: (req, res) => {
        //criando nova instancia de User
        //dados para o User ( _Id, _first_name, _last_name, _email, _password, _phone) 
        //!Atenção valores não passados serão undefned e não serão nulo!
        //let user = req.body
       // newUser = new UserModel(user.Id, user.first_name, user.last_name, user.email, user.password, user.phone)
       x =  new UserModel.User(req.body.Id)
    
        console.log(x)
        res.send(x);
    },

    getuser: (req, res) => {
        res.send(newUser)
    }
}




