const express = require('express');
const fetch = require("node-fetch");
const ejs = require('ejs')
const path = require("path");
const app = express()

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/views')));

app.get('/', (req, res, next) => {
    res.send("Welcome! The page was designed by Amit Dey")
})

app.get("/top/10", (req, res, next) => {
    let getData = new Array()
    fetch("https://api.wazirx.com/api/v2/tickers")
      .then((res) => res.json())
        .then((data) => {
          for (const key in data) {
              getData.push(data[key])
                  
            }
            res.render('index', { data: getData })
          }
    )
    .catch(err=>console.log(err))
});

app.listen(8000, console.log("Running"))