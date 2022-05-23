// Rotas Users
var express = require('express');
var router = express.Router();
const userController = require('../Controller/UserController')

//home de user
router.get('/', function(req, res) {
  res.send('Servidor On em User');
});

//cria novo usuario
router.post('/newuser', userController.setuser)

//busca user
router.get('/buscauser', userController.getuser)

module.exports = router;