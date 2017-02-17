var express = require('express');
    app = express();
    routes = require('../routes/index');
app.use('/',routes);
app.set('port',process.env.PORT || 3000);

var server = app.listen(app.get('port'),function(){
    console.log('Se inicio el servidor en el puerto 3000');
});
