const express = require('express')
const app = express()
const port = 8080

const data = {
    "employee": {
        "name": "ashutosh",
        "id": 1,
        "salary": 56000,
        "married": true
    }
}

app.use('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})