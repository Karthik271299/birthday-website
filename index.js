const express = require("express");
const path = require("path");
const port = 80;

const app = express();
app.use(express.static("src"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "src", "html", "atiya.html"))
})

app.listen(port, () =>
    console.log(`App Listening at http://localhost:${port}`)
);

