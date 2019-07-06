const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/slack/demobot',(req,res) => {
    console.log('message received')
    res.format({
        'text/plain' : function() {
            res.send(req.body.challenge)
        }
    })
    
    // event.text - will contain the message details - Utilize this text for your purpose
    
    // "channel": "CB1H4M17A" - is a channel id
    // "channel_type": "channel" - means this is from a channel


})

respondToTheUser = function(user,channel,text) {
    // url to invoke - https://slack.com/api/chat.postMessage?token=XXXXXXXXX&channel=CB1H4M17A&text=hi&pretty=1
    // https://slack.com/api/chat.postMessage?token=XXXXXXXXXXXX&channel=CB1H4M17A&text=hi&thread_ts=1562453534.002700&pretty=1

    
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))