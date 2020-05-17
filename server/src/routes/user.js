const { Router} = require('express');
const router = Router();

const pool = require('../database/database');

router.get('/', (req,res) => {
    res.status(200).json('Server en el puerto 3000 y base de datos conectada');
});

router.get('/users', async (req,res) => {
    const response = await pool.query('select * from users;',(error, response, fields) => {
        if (!error){
           res.json(response.rows);
        } else {
            console.log(error);
        }
    });
});

router.get('/users/:id', async (req,res)=>{
    const id = req.params.id;
    const response = await pool.query('select * from users where user_id = $1', [id], (error, response, fields) => {
        if(!error){
            res.json(response.rows);
        } else {
            console.log(error);
        }
    });
});

router.post('/users', async (req,res) => {
    const {user_nickname, user_name, user_lastname, user_email, randomstr, hash} = req.body;
    console.log(req.body);
    const response = await pool.query('INSERT INTO users (user_nickname, user_name, user_lastname, user_email, randomstr, hash) values ($1, $2, $3, $4, $5, $6)',
    [user_nickname, user_name, user_lastname, user_email, randomstr, hash], (error, response, fields) => {
        if(!error){
            res.json({status: 'Usuario creado'});
        } else {
            console.log(error);
        }
    });
});

router.put('/users/:id', async (req,res)=>{
    const id = req.params.id;
    const { user_nickname, user_name, user_lastname, user_email, randomstr, hash} = req.body;
    console.log(req.body);
    const response = await pool.query('update users set user_nickname = $1, user_name = $2, user_lastname = $3, user_email = $4, randomstr = $5, hash = $6 WHERE user_id = $7',
        [user_nickname, user_name, user_lastname, user_email, randomstr, hash, id], (error, response, fields) =>{
        if(!error){
            res.json({status: 'Cambios guardados'});
        } else {
            console.log(error);
        }
    });
});

router.delete('/users/:id', async (req,res) => {
    const id = req.params.id;
    const response = await pool.query('delete from users where user_id = $1', [id], (error, response, fields) =>{
        if(!error){
            res.json({status: 'Usuario eliminado'});
        } else {
            console.log(error);
        }
    });
})

module.exports = router;