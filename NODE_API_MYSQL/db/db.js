const express = require("express");
const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "teste_usuarios"
});

module.exports = conn;
