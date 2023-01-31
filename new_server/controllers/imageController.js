const { getNewConnectionObject, string } = require('../connection');

exports.getImg = (req, res) => {
	const { id } = req.params;
	const connection = getNewConnectionObject();
	connection.query(
		`SELECT * FROM picture_links WHERE PictureId=${+id}`,
		(err, result) => {
			if (err) {
				console.log(err);
				return res.status(200).json({
					ok: false,
					result: [],
				});
			} else {
				res.status(200).json({
					ok: true,
					result,
				});
			}
		}
	);
};

exports.getImgData = (req, res) => {
	const { id } = req.params;
	const connection = getNewConnectionObject();
	connection.query(
		`${string} WHERE picture_links.PictureId=${+id}`,
		(err, result) => {
			if (err) {
				console.log(err);
				return res.status(200).json({
					ok: false,
					result: [],
				});
			} else {
				res.status(200).json({
					ok: true,
					result,
				});
			}
		}
	);
};
