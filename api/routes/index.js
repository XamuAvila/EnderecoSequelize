const express = require('express');
const estado = require('./estado')
const localidade = require('./localidade')
const bairro = require('./bairro')
const logradouro = require('./logradouros')
const endereco = require('./endereco')
module.exports = app => {
    app.use(express.json());
    app.use(estado);
    app.use(localidade);
    app.use(bairro);
    app.use(logradouro);
    app.use(endereco);
}