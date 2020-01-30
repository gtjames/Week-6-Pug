/**
 * Created by gjames on 1/31/2017.
 */
var express = require('express');
var router = module.exports = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('test', { title: 'Tester' });
});


/*
 *	render pageA which has many examples of PUG syntax
 */
router.get('/pageA', function(req, res, next) {
	res.render('pageA', { title: 'More Pug!' });
});


/*
 *	render pageB which has many more examples of PUG syntax
 */
router.get('/pageB', function(req, res, next) {
    res.render('pageB', { title: 'Sub Pug!' });
});
