const { json } = require('express');
var express = require('express');
var router = express.Router();
const sql = require("../dboperation");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//test connection
router.get('/testconnect', function(req, res, next) {
  sql.getdata();
  res.render('index', { title: 'Express' });
});


router.get("/getdata_withQuery", function (req, res, next) {
  sql.getdata_withQuery().then((result) => {
    res.json(result[0]);
  });
});

router.get("/getCareers", function (req, res, next) {
  sql.getAllCareer().then((result) => {
    res.json(result[0]);
  });
});

router.post("/objpost", function (req, res, next) {
  let params = req.body;
  sql.addNew(params).then((result) => {
    res.json(result[0]);
  });
});

router.put("/objput", function (req, res, next) {
  let params = req.body;
  sql.update(params).then((result) => {
    res.json(result[0]);
  });
});

router.delete("/objdelete/:id", function (req, res, next) {
  sql.deleteObj(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;
