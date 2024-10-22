var express = require('express');
var router = express.Router();
const HC=require('../controller/blog');
const { render } = require('../app');
/* GET home page. */
router.post('/creat',HC.creat )
router.get('/show',HC.show )
router.delete('/delete',HC.delete    )
router.patch('/edit',HC.edit )



module.exports = router;
