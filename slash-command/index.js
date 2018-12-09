const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/ping', (req, res) => {
    // tDK7jdBSNBgeKZ6Jn2iacKGt - to verify whether is from slack or not
    console.log(req.body);
    res.send("Hello Mr. "+ req.body.user_name +" , this is to confirm you that the '/command' is working and the parameter you have pass along with '/slash' command is "+req.body.text);
})


app.post('/profile', upload.array(), function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))