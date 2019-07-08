const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

message_ids = []
app.get('/', (req, res) => res.send('Hello World!'))

//AJFGCT3JA = id of msg-interceptor
// to open this bot config , open - https://api.slack.com/apps/AJFGCT3JA/
// if (response.event.type == "message" && event.subtype == undefined ) - is a message from user
// if (response.event.type == "message" && event.subtype == "bot_message") - message from bot user
// if (response.event.thread_ts != undefined ) - is a thread message
// response.event.ts - this value to be used for start a thread
// response.event.channel - chhannel Id information
// "channel_type": "channel" - also for a indication for a channel message

app.post('/slack/demobot',(req,res) => {
    console.log('message received')
    responseBody = req.body
    
    if(responseBody.event.client_msg_id != undefined && responseBody.event.ts != undefined) {
        message_ids.push(responseBody.event.ts)
    }

    if(responseBody.challenge != undefined) {
        res.format({
            'text/plain' : function() {
                res.send(req.body.challenge)
            }
        })
    } else {
        
        //evaluate message are from user not from bot
        if(responseBody != undefined && responseBody.event != undefined && responseBody.event.type == "message" && responseBody.event.subtype != "bot_message") {
            
            //check message are not from a message thread - because we will not be dealing with thread message
            if(responseBody.event.client_msg_id != undefined && duplicateMessage(responseBody.event.client_msg_id) && responseBody.event.thread_ts == undefined) {
                respondToTheUser("we will look into your request",responseBody.event.ts)
            } 
        } 
        res.status(200)
    }
})

duplicateMessage = function(msgId) {
    console.log(message_ids)
    return msgId in message_ids ? false : true
}

respondToTheUser = function(text,ts) {
    console.log("respondToTheUser - got a request")
    // test the api https://api.slack.com/methods/chat.postMessage/test
    // https://slack.com/api/chat.postMessage?token=XXXXXXXXXXXXXXXX&channel=CB1H4M17A&text=this%20is%20the%20reply%20mesage&thread_ts=1562498222.001500&pretty=1
    
    apiUrl = "https://slack.com/api/chat.postMessage?token=XXXXXXXXXXXXXXXXXX&channel=CB1H4M17A&text="+text+"&thread_ts="+ts+"&pretty=1"
    axios.get(apiUrl,(req,res) => {
        console.log(res.body)
    })
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
