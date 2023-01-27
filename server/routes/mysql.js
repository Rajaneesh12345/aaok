const express = require('express');
const {
	doIndividualInfoQuery,
	doIndividualImgQuery,
	doSearchQuery,
	doSameClusterQuery,
	doNumberOfLayersQuery,
	doRelatedQuery,
	unduplicateRows,
	withConnection,
} = require('../controllers/mysqlService');

var router = express.Router();

router.post('/search-filtered', async function (req, res) {
	try {
		console.log(req.body);
		const filters = req.body['filters'];
		const orderBy = req.body['sort'];
		const [rows, fields] = await withConnection(
			doSearchQuery,
			filters,
			orderBy
		);
		const condensedRows = unduplicateRows(rows);
		res.status(200).json(condensedRows);
	} catch (e) {
		res.status(500);
		throw e;
	}
});

router.post('/individual', async function (req, res) {
	try {
		const personId = req.body['id'];
		const individualInfo = await withConnection(
			doIndividualInfoQuery,
			personId
		);
		res.json(individualInfo);
	} catch (e) {
		res.sendStatus(500);
		throw e;
	}
});

router.get('/img/:id', async function (req, res) {
	try {
		const imgId = req.params['id'];
		const imgQueryRes = await withConnection(doIndividualImgQuery, imgId);
		const img = imgQueryRes[0][0].link;
		res.status(200).json({ img });
	} catch (e) {
		res.sendStatus(500);
		throw e;
	}
});

router.get('/in-cluster/:cid', async function (req, res) {
	try {
		const clusterId = req.params['cid'];
		const data = await withConnection(doSameClusterQuery, clusterId);
		res.status(200).json(data);
	} catch (e) {
		res.sendStatus(500);
		throw e;
	}
});

router.get('/related/:pid', async function (req, res) {
	try {
		const personId = req.params['pid'];
		const data = await withConnection(doRelatedQuery, personId);
		res.json(data);
	} catch (e) {
		res.sendStatus(500);
		throw e;
	}
});

router.get('/number-of-layers/:cid', async function (req, res) {
	try {
		const clusterId = req.params['cid'];
		const data = await withConnection(doNumberOfLayersQuery, clusterId);
		res.json(data);
	} catch (e) {
		res.sendStatus(500);
		throw e;
	}
});

module.exports = router;

// to search the queries
