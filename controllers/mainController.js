let mainController = {

    index: function (req, res){
        res.render('index', {title: 'Bienvenidos a la aplicación'});
    },

}

module.exports = mainController