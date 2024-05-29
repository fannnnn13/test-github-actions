const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).send({
        message : "After using Github Actions for CI/CD, this is the first deployment of the app.",
        status : "Success"
    })
});


app.listen(port, () => {
    console.log(`Server is running on port localhost:${port}`);
});