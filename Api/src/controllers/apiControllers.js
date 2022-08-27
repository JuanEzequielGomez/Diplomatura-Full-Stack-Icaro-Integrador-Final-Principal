const users = require("../../models").usuarios;
const messages = require("../../models").messages;
const api = {
  getusers(req, res){
    return users.findAll()
    .then(users => res.send(users))
    .catch(error => res.send(error))
  },

  postUser: (req, res) => {
    // console.log(req.body);
    return users.findOrCreate({
      where: {
        username: req.body.username,
      },
      defaults: {
				firstname: req.body.firstname,
				lastname: req.body.lastname,
				password: req.body.password,
				country: req.body.country,
				city: req.body.city
			}
    })
.then(([creado , existe]) => {
      if (!existe) {
        console.log('El Usuario fue creado con éxito');
        return res.send('Usuario creado')
      } else {
        console.log('El usuario ingresado ya existe');
        return res.send('Usuario ya existe')
      }
    })
    .catch(e => res.send(e))
  },

  // messages
postMessage: (req, res) => {
    return messages.create(req.body)
    .then(m => res.send(m))
    .catch(e => res.send(e))
  },
  
}


module.exports = api
