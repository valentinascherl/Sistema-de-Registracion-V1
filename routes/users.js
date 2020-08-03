var express = require('express');
var router = express.Router();
let userController = require ("../controllers/userController");
let logMiddleware = require ('../middlewares/logMiddleware');
const middUploadFile = require('../middlewares/middUploadFile');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile/:email', logMiddleware, userController.profile);

router.get('/register', logMiddleware, userController.mostrarRegistro);
router.post('/register', logMiddleware, middUploadFile.uploadFile,
userController.create);

/*router.post('/register', function(req,res, next){
  res
}
);
*/


module.exports = router;
