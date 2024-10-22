var express = require('express');
var router = express.Router();
const HC=require('../controller/hc')
/* GET home page. */
router.post('/createdata',HC.createdata )
router.get('/showdata',HC.showdata )
router.delete('/deletedata/:id',HC.deletedata)
router.patch('/editdata',HC.editdata)
router.post('/userlogin',HC.userlogin)

module.exports = router;
