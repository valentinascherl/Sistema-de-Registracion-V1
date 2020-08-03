const fs = require('fs');
const path = require('path');


function readHTML(filename) {
  let archivoHTML = fs.readFileSync(path.join(__dirname, '/../views/' + filename + '.html'), 'utf-8');
  return archivoHTML;
}

// Lee el archivo Json
function readJSONfile() {
  return JSON.parse(fs.readFileSync(userController.archivo, 'utf-8'));
}
  // Guarda el json de usuarios
  function saveJSONfile(objetos) {
    fs.writeFileSync(userController.archivo, JSON.stringify(objetos, null, ' '));
  }
  // Agrega un nuevo usuario
  function addUserToList(usuario) {
    let usuarios = readJSONfile();
    usuarios.push(usuario);
    saveJSONfile(usuarios);
  }




let userController = {

  archivo: path.join(__dirname, '..') + '/data/users.json',

  searchByEmail: function (email) {
    let archivoJson = readJSONfile();
    let user = null;
    archivoJson.forEach((elem, i) => {
      if (elem["email"] == email) {
        user = elem;
      }
    });
    return user; // si no lo encuentra devuelve null
  },

  profile: function (req, res) {
    let usuario = userController.searchByEmail(req.params.email);
    res.render('profile', {usuario});
  },


  mostrarRegistro: function (req, res) {
    res.render ('registro');

  },
  create: function(req, res){
    if (typeof req.file === 'undefined') {
      res.render('index',{title: "ERROR: Debe subir un archivo de Avatar para registrarse."});
    }else{
      let usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email:req.body.email,
        password: req.body.password,
        avatar: req.file.filename
      }
      addUserToList(usuario);
      res.render('profile', {usuario});
    }
  }

}

module.exports = userController;
