import express from 'express';
import got from 'got';

const app = express();

app.get('/get-dribbble-shots', (req, res) => {
	got(`https://api.dribbble.com/v2/user/shots?access_token=${process.env.DRIBBBLE_KEY}`, { json: true })
	.then(response => {
		let shots = response.body;
		let n = req.query.amount || shots.length;
		let result = shots.slice(0, n);
		res.status(200).send({success: 'true', shots: result});
	})
	.catch(error => {
		console.log(error.response.body);
	});
});

app.listen(5000, () => {
	console.log(`server running on port 5000`);
});
