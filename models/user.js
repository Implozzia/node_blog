const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/db');

const UserSchema = mongoose.Schema({  //создание модели через методы мангус
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema); //создаем объект и экспортируем


//создаем 3 функции (Ищем юзера по логину, айди, добавить юзера в базу)
module.exports.getUserByLogin = function (login, callback) { //поиск в базе по айди и логину
    const query = {login: login};
    User.findOne(query, callback);
}

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}

module.exports.addUser = function (newUser, callback) { //генерируем соль для пароля
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
    newUser.save(callback); //сохрание в бд
}