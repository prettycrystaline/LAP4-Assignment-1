var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.status(200).json({msg: 'This is CORS-enabled for all origins!'})
});
module.exports = router;