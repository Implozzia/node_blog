const express = require('express');
const cors = require('cors'); // для взаимодействия со сторонними айпи
const bodyParser = require('body-parser'); //для обработки пост запросов
const mongoose = require('mongoose'); //для подключения к монго дб
const passport = require('passport');
const path = require('path');
const config = require('./config/db') //подключение библиотек
const account = require('./routes/account')

const app = express(); //инициализация прилы

const port = 3000;

app.use(cors());

app.use(bodyParser.json())

mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log("Successful connection to database")
});

mongoose.connection.on('error', (err) => {
    console.log("Not successful connection to database" + err)
});

app.listen(port, () => {
    console.log("Server started at: " + port)
}); //запуск на порт 3000

app.get('/', (req, res) => {
    res.send("Home page")
}); //отправляем респонс

app.use('/account', account); //когда будем переходить на урл, начинающийся с account будем попадать в аккаунт js, который импортировали
