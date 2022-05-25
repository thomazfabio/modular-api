//Objeto user

//Impontante >>> atributos de objetos se inicializam com underline "_"
 function User( Id, first_name, last_name, email, password, phone) {
    this.id = Id
    this.first_name = first_name
    this.nast_name = last_name
    this.email = email
    this.password = password
    this.phone = phone
}

var teste = 'apenas teste'

module.exports = { User, teste } 

//teste = new User('12345', 'fabio')
