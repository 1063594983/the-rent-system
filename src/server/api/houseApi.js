const express = require('express');
const router = express.Router();

const models = require('../db');
const mysql = require('mysql');

var http=require("http");

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

router.get('/getHouse', (req, res) => {
	let params = req.query;
	let sql = "select * from house where state = ? order by release_time desc limit ?";
	conn.query(sql, ["available", parseInt(params.size)], (err, result) => {
		if (err) {
			console.log(err)
		} else {
			for (let item of result) {
				item.details = JSON.parse(item.details);
			}
			res.end(JSON.stringify(result));
		}
	})
})

router.get('/getHouseById', (req, res) => {
	let params = req.query;
	let sql = "select * from house where house_id = ?";
	conn.query(sql, [params.house_id], (err, result) => {
		if (err) {
			console.log(err)
		} else {
			result[0].details = JSON.parse(result[0].details);
			res.end(JSON.stringify(result[0]));
		}
	})
})

router.get('/getHouseBefore', (req, res) => {
	let params = req.query;
	let sql = "select * from house where release_time < ? and state = ?";
	conn.query(sql, [params.release_time, "available"], (err, result) => {
		if (err) {
			console.log(err)
		} else {
			for (let item of result) {
				item.details = JSON.parse(item.details);
			}
			res.end(JSON.stringify(result));
		}
	})
})

router.get('/getHouseAfter', (req, res) => {
	let params = req.query;
	let sql = "select * from house where release_time > ? and state = ? order by release_time";
	conn.query(sql, [params.release_time, "available"], (err, result) => {
		if (err) {
			console.log(err)
		} else {
			for (let item of result) {
				item.details = JSON.parse(item.details);
			}
			res.end(JSON.stringify(result));
		}
	})
})

router.post('/releaseHouse', (req, res) => {
    let params = req.body.details;
    let sql = "insert into house(monthly_rent, details, state, owner, release_time) values(?, ?, ?, ?, ?)";
    conn.query(sql, [params.price, JSON.stringify(params), "available", "user1", new Date().getTime()], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.end("Success");
        }
    })
})

router.get('/getPlace', (req, res) => {
	console.log('hello')
	http.get("http://api.map.baidu.com/place/v2/suggestion?query=长亭&region=上海&city_limit=true&output=json&ak=k2EYGytzdGHZanU2b3HRWiY6Bby1GNjt", (data) => {
		var str = "";
		data.on("data", (chunk) => {
			str += chunk;
		})
		data.on("end", () => {
			res.end(str);
		})
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