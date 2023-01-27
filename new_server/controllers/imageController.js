const { getNewConnectionObject } = require('../connection');
const connection = getNewConnectionObject();

exports.getImg = (req, res) => {
	const { id } = req.params;
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
