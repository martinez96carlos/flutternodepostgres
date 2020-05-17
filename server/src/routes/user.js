const { Router} = require('express');
const router = Router();

const pool = require('../database/database');

router.get('/', (req,res) => {
    res.status(200).json('Server en el puerto 3000 y base de datos conectada')
});

router.get('/:users', (req,res) => {
    pool.query('SELECT * from USERS;',(error, rows, fields) => {
        if (!error){
            res.json(rows);
        } else {
            console.log(error);
        }
    });
});

router.get('/:users/:id', (req,res)=>{
    const {id} = req.params;
    pool.query('SELECT * from USERS where USER_ID = ?;', [id], (error, rows, fields) => {
        if(!error){
            res.json(rows);
        } else {
            console.log(error);
        }
    });
});

router.post('/:users', (req,res) => {
    const { USER_NICKNAME, USER_NAME, USER_LASTNAME, USER_EMAIL, RANDOMSTR, HASH} = req.body;
    console.log(req.body);
    pool.query('INSERT INTO USERS(USER_ID, USER_NICKNAME, USER_NAME, USER_LASTNAME, USER_EMAIL, RANDOMSTR, HASH) VALUES (?,?,?,?,?,?);',
        [USER_NICKNAME, USER_NAME, USER_LASTNAME, USER_EMAIL, RANDOMSTR, HASH], (error, rows, fields) =>{
        if(!error){
            res.json({status: 'Usuario guardado'});
        } else {
            console.log(error);
        }
    });
});

router.put('/:users/:id', (req,res)=>{
    const { USER_NICKNAME, USER_NAME, USER_LASTNAME, USER_EMAIL, RANDOMSTR, HASH, id} = req.body;
    console.log(req.body);
    pool.query('UPDATE users SET USER_NICKNAME = ?, USER_NAME = ?, USER_LASTNAME = ?, USER_EMAIL = ?, RANDOMSTR = ?, HASH = ?, WHERE USER_ID = ?;',
        [USER_NICKNAME, USER_NAME, USER_LASTNAME, USER_EMAIL, RANDOMSTR, HASH, id], (error, rows, fields) =>{
        if(!error){
            res.json({status: 'Cambios guardados'});
        } else {
            console.log(error);
        }
    });
});

router.delete('/:users/:id', (req,res) => {
    const {id} = req.params;
    pool.query('DELETE from USERS where USER_ID = ?', [id], (error, rows, fields) =>{
        if(!error){
            res.json({status: 'Usuario eliminado'});
        } else {
            console.log(error);
        }
    });
})

module.exports = router;