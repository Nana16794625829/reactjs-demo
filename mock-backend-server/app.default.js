const express = require("express")

const app = express();

app.use(express.text());
app.use(express.urlencoded({ extended: false }));

// 提交表單
app.post("/api/stockDispatch/save", (req, res) => {
    return res.json({
        "status": "200",
        "response": "ok"
    })
})

app.post("/api/settings/product/save", (req, res) => {
    return res.json({
        "status": "200",
        "response": "ok"
    })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

module.exports = app;
