const express = require("express");
const cors = require("cors");
const {put} = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
	const { username } = req.body;
	
	try {
		const r = await put('https://api.chatengine.io/users/', {
			username: username,
			secret: username,
			first_name: username
		}, {
			headers: {
				"private-key": "cdfdfcf2-04a3-4487-adb6-220a596d37b0"
			}
		});
		
		return res.status(r.status).json(r.data);
	} catch (e) {
		return res.status(e.response.status).json(e.response.data);
	}
});

app.listen(3001);