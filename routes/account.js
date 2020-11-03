const express = require('express');
const router = express.Router(); //меняем переменную app которой нет в данном файле, на переменную роутер и убираем проверку на слово аккаунт, т.к. проверка идет сразу в индексе

router.get('/reg', (req, res) => {
    res.send("Registration")
});

router.get('/auth', (req, res) => {
    res.send("Auth")
});

router.get('/dashboard', (req, res) => {
    res.send("Dashboard")
});

module.exports = router; //экспортируем переменную роутер ( когда создаем модуль, нам всегда надо его экспортировать)