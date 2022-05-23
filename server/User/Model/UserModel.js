//Objeto user

//Impontante >>> atributos de objetos se inicializam com underline "_"
function User(_Id, _first_name, _last_name, _email, _password, _phone) {
    this.id = _Id
    this.first_name = _first_name
    this.nast_name = _last_name
    this.email = _email
    this.password = _password
    this.phone = _phone
}

module.exports = User