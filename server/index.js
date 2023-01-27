const express = require('express');
const mysqlRoutes = require('./routes/mysql');
const path = require('path');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the React app
app.use(express.static(path.resolve(__dirname, '/../client/build'))); // 1

app.use('/api', mysqlRoutes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.use('*', (req, res) => {
	res.sendFile(path.resolve(__dirname + '/../client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Process started on port ${port}.`);
