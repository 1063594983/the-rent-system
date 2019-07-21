const express = require('express');
const router = express.Router();

const models = require('../db');
const mysql = require('mysql');

// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();

router.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

router.post('/login', (req, res) => {
	let params = req.body;
	let sql = "select * from user where username = ? and password = ?";
	conn.query(sql, [params.username, params.password], (err, result) => {
		if (err) {
            console.log(err)
            res.end("Failed");
		} else {
            if (result.length == 1) {
                res.end("Success");
            } else {
                res.end("Failed");
            }
		}
	})
})

router.post('/addOrder', (req, res) => {
    let params = req.body;
    let sql = "insert into house_orders(house_id, renter, start_time, lasting_months, total_money, release_time, state) values(?, ?, ?, ?, ?, ?, ?)";
    conn.query(sql, [params.house_id, params.renter, params.start_time, params.lasting_months, params.total_money, params.release_time, 'unfinished'], (err, result) => {
        if (err) {
            console.log (err);
            res.end("Failed");
        } else {
            res.end("Success");
        }
    })
})


/*
router.get('/getCommentByGoods', (req, res) => {
	var goods_id = req.query.goods_id;
	var sql = $sql.comment.getCommentByGoods;
	conn.query(sql, [goods_id], (err, result) => {
		if(err) {
			console.log(err);
		}
		if(result) {
			res.send(result);
		}
	})
})

router.post('/confirmComment', (req, res) => {
	var params = req.body;
	var sql = 'update sale_record set is_commented = 1 where record_id = ?';
	var recordId = params.record_id;
	conn.query(sql, [recordId], (err, result) => {
		if(err) {
			console.log(err);
		}
		if(result) {
			res.end();
		}
	})
})
*/
module.exports = router;