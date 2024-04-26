import express from "express";
const data = require('./data.json')

const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})

app.get("/", (req, res) => {
    console.log(data)
    res.json({ data: data})
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});