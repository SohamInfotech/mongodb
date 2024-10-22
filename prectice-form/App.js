const express = require('express')
const app = express()
const Mongoclint = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/'
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }))
const client = new Mongoclint(url);
const db = client.db('kubavat_soham')

app.set('view engine', 'ejs')
app.get('/', async(req, res) => {
    const data=await Collection.find().toArray();
    res.render('index')


})
app.listen(200)