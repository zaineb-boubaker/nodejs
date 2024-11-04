const { render } = require("ejs");
const express = require("express");
const app = express();
const port = 5000;


app.use(express.static(__dirname));
app.set("view engine", "ejs");

function workinghour(req, res, next) {
    let now = new Date();
    let day = now.getDay();
    let hour = now.getHours();
    if (hour < 17 && hour >= 9 && day > 0 && day <= 5) {
        next()
    //    console.log(day);
    }
    else { 
        res.render("closed.ejs")
        }
}

app.use(workinghour);

app.get("/", (req, res) => {
    res.render("index.ejs")
})
app.get("/services", (req, res) => {
    res.render("services.ejs")
})
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`server is running on port ${port}`);
})