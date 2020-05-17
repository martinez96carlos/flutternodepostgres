const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//routes
app.use(require('./routes/user'));


//starting the serter
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
})