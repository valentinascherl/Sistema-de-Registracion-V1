var express = require('express');
var router = express.Router();
let logMiddleware = require ('../middlewares/logMiddleware');
let mainController = require ('../controllers/mainController');

router.get('/', logMiddleware, mainController.index);



module.exports = router;
