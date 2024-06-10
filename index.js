const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).send({
        message : "Halo, ini test untuk laporan akhir presentasi MBKM tanggal 10 Juni 2024",
        status : "Success"
    })
});


app.listen(port, () => {
    console.log(`Server is running on port localhost:${port}`);
});