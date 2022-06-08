const { Client } = require('pg')
var fs = require('fs');

var DROP_AND_CREATE_TABLES = fs.readFileSync('schema.sql').toString();
var ADD_CHARACTERISTICS = fs.readFileSync('./add_characteristics.sql').toString();
var ADD_CHARACTERISTICS_REVIEWS = fs.readFileSync('./add_characteristics_reviews.sql').toString();
var ADD_REVIEWS_PHOTOS = fs.readFileSync('./add_reviews_photos.sql').toString();
var ADD_REVIEWS = fs.readFileSync('./add_reviews.sql').toString();

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  database: 'test'
})

client.connect();

// TABLE SETUP

// client.query(DROP_AND_CREATE_TABLES, (err, res) => {
//   if (!err) {
//     console.log(res.rows)
//   } else {
//     console.log(err.message)
//   }
// });

// DATA ADDERS

// client.query(ADD_CHARACTERISTICS, (err, res) => {
//   if (!err) {
//     console.log(res.rows)
//   } else {
//     console.log(err.message)
//   }
//   client.end();
// })

// client.query(ADD_CHARACTERISTICS_REVIEWS, (err, res) => {
//   if (!err) {
//     console.log(res.rows)
//   } else {
//     console.log(err.message)
//   }
//   client.end();
// })

// client.query(ADD_REVIEWS_PHOTOS, (err, res) => {
//   if (!err) {
//     console.log(res.rows)
//   } else {
//     console.log(err.message)
//   }
//   client.end();
// })

// client.query(ADD_REVIEWS, (err, res) => {
//   if (!err) {
//     console.log(res.rows)
//   } else {
//     console.log(err.message)
//   }
//   client.end();
// })