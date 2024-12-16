// /lib/db.js
const mysql = require('mysql');


const db = mysql.createPool({

  host:'localhost', // Replace with your MySQL host
  user:'root',      // Replace with your MySQL user
  password:'Yuvika@123', // Replace with your MySQL password
  database:'ampirial', // Replace with your MySQL database name
});



module.exports = db;
