const express = require('express')
const router = express.Router();
const HC = require('../controller/Hc');


router.get('/',HC.pageview)
router.get('/subdata',HC.subdata)


module.exports = router;






 