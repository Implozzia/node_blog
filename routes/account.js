const express = require('express');
const router = express.Router(); //меняем переменную app которой нет в данном файле, на переменную роутер и убираем проверку на слово аккаунт, т.к. проверка идет сразу в индексе
const User = require('../models/user');

router.post('/reg', (req, res) => { //обрабатываем страничку регистрации
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        login: req.body.login,
        password: req.body.password
    });

     User.addUser(newUser, (err, user) => {
         if(err) {
             res.json({success: false, msg: "User has not be added"})
         }
         else {
             res.json({success: true, msg: "User has been added"})
         }
     });
});

router.get('/auth', (req, res) => {
    res.send("Auth")
});

router.get('/dashboard', (req, res) => {
    res.send("Dashboard")
});

module.exports = router; //экспортируем переменную роутер ( когда создаем модуль, нам всегда надо его экспортировать)