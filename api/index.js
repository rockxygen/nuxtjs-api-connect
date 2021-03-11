const express = require('express');
const app = express();

app.get("/get-all-data", (req, res) => {
    res.status(200).json({
        items: [
            { id : 1, name: 'John Doe' },
            { id : 2, name: 'Jane Doe' },
            { id : 3, name: 'Mark Doe' },
            { id : 4, name: 'Mary Doe' },
        ]
    });
});

app.post("/send-data", (req, res) => {
    console.log(req.body);
    res.status(200).json({
        status: 'ok'
    });
});
// app.put("/get-all-data", (req, res) => {})
// app.delete("/get-all-data", (req, res) => {})

module.exports = {
    path: '/api',
    handler: app
}