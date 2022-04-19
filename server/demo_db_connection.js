var mysql = require('mysql');
var fs = require('fs');

const DATA = JSON.parse( fs.readFileSync('../client/src/data.json') );

////////////////////////////////////////////////////////////////////////////////

var pool = mysql.createPool({
  host: DATA.database.host,
  user: DATA.database.user,
  password: DATA.database.MySQLPassword,
});

////////////////////////////////////////////////////////////////////////////////

init();

function init() {
  createDB(DATA.database.dbName);
  setTimeout(showDBs, 1000);
  buildDatabase();
}

function buildDatabase() {
  const COLS = 
    "userID INT NOT NULL AUTO_INCREMENT, " +
    DATA.inputs.map(input => newColumn(input)).join(", ") +
    ", PRIMARY KEY (userID)"
  createDB(DATA.database.dbName);
  createTable(DATA.database.dbName, DATA.database.tableName, COLS);
  showDBs();
}

////////////////////////////////////////////////////////////////////////////////

function exec(sql, showResult=false) {
  pool.getConnection(err => {
    if (err) throw err;
    console.log("Connected!");

    pool.query(sql, (err, result) => {
      if (err) throw err;
      console.log(showResult ? result : "SQL executed!");
    });
  });
}

////////////////////////////////////////////////////////////////////////////////

function showDBs() { // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<your-password>';
  exec("show databases;", true);
}
function createDB(dbName) {
  exec(`create database if not exists ${dbName};`);
}
function delDB(dbName) {
  exec(`drop database if exists ${dbName};`);
}
//------------------------------------------------------------------------------

function insert(cols, values) {
  exec(`INSERT INTO ${DATA.database.dbName}.${DATA.database.tableName} (${cols}) VALUES (${values});`);
}

function createTable(dbName, tableName, columns) {
  exec(`create table ${dbName}.${tableName} (${columns});`);
}
function showTable() {
  exec(`show tables from ${DATA.database.dbName};`);
  //exec("SELECT * FROM test_table", true);
}
function newColumn(input) {
  switch (input.type) {
    case 'text':
    case 'password':
      return `${input.name} varchar(${input.validation.maxLength}) NOT NULL`;
    case 'email':
      return `${input.name} varchar(320) NOT NULL`; // 320 is the max length of an email address
    case 'radio':
      return `${input.name} char(${Math.max.apply(Math,input.options.map(op => op.value.length))}) NOT NULL`;
    case 'color':
      return `${input.name} char(7) NOT NULL`;
    case 'week':
      return `${input.name} varchar(10) NOT NULL`;
    case 'month':
      return `${input.name} varchar(10) NOT NULL`;
    case 'tel':
      return `${input.name} varchar(20) NOT NULL`;
    case 'url':
      return `${input.name} varchar(2048) NOT NULL`;
    case 'number':
    case 'range':
      return `${input.name} int NOT NULL`;
    case 'checkbox':
      return `${input.name} boolean NOT NULL`;
    case 'file':
      return `${input.name} mediumblob NOT NULL`;
    case 'textarea':
      return `${input.name} text NOT NULL`;
    case 'date':
      return `${input.name} date NOT NULL`;
    case 'datetime-local':
      return `${input.name} datetime NOT NULL`;
    case 'time':
      return `${input.name} time NOT NULL`;
  }
}