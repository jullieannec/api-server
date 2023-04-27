const express = require('express');
const router = express.Router();
const sql = require("../dboperation");
var app = express();
const cors = require('cors');

/* GET users listing. */
router.get("/", function (req, res, next) {
  sql.getdata_withQuery().then((result) => {
    res.json(result[0]);
  });
});

router.get('/:username', function(req, res) {
  sql.getUserByUserName(req.params.username).then((result) => {
    res.json(result[0]);
  });
});

/*router.get('/res', function(req, res, next) {
  res.send('respond with a resource - users route');
});*/

module.exports = router;
