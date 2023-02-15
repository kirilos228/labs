require('dotenv').config();
// підключення express
const express = require("express");
// створюємо об’єкт додатка
const app2 = express();
// визначаємо обробник для маршруту "/"

app2.get("/", (request, response) => {
    // відправляємо відповідь
    response.send({message: process.env.MESSAGE});
});
module.exports = app2;
//module.exports = app2;






