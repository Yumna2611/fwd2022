const express = require("express");
const app = express();
const port = 8080;
https://fwd2022demo.herokuapp.com/ | https://git.heroku.com/fwd2022demo.git

app.get("/", (req, res) => {
    res.send("Hello Heroku");
})

app.listen(process.env.PORT || port, () => {
	console.log("listening 8080...");
});