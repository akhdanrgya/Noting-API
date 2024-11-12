const express = require("express")

const app = express()
const port = 5000

app.get("/", (req, res)=> {
    res.json("Selamat datang di API NOTING ❤️😍")
})

app.listen(port, (req, res) => {
    console.log(`listening server on port http://localhost:${port}`)
})