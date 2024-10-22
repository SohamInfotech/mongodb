var express = require('express');
var router = express.Router();
const HC=require('../controllar/contro')


/* GET home page. */
router.post('/creatuser',HC.creatuser)

module.exports = router;
