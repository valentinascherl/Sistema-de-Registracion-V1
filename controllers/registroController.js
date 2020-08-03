const fs = require('fs');
const path = require ('path');


function readHTML(filename){
    let archivoHTML = fs.readFileSync(path.join(__dirname,'/../views/' + filename + '.html'),'utf-8');
    return archivoHTML;
  }



let registroController = {
    registro: function(req, res, next) {
      let archivoHTML = readHTML('registro');
        res.send(archivoHTML);
      }

}

module.exports = registroController;