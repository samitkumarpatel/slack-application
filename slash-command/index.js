const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => res.send('Hello World!'))

// slash command can also be attached to a slackbot
// configuration - https://api.slack.com/apps/<<SLACKBOOT_ID>>/slash-commands?

app.post('/bot', (req, res) => {
    res.send("Hello Mr. "+ req.body.user_name +" , this is to confirm you that the '/command' is working and the parameter you have pass along with '/slash' command is "+req.body.text);
})

// for message button for slack we need text and attachments Josn structure as follow
//slackbot intractive message intraction - https://api.slack.com/apps/<<SLACKBOOT_ID>>/interactive-messages?
app.post('/bot/messagebutton', (req, res) => {
  
  attachments = [
    {
      "text": "Choose a game to play",
      "fallback": "You are unable to choose a game",
      "callback_id": "wopr_game",
      "color": "#3AA3E3",
      "attachment_type": "default",
      "actions": [
          {
              "name": "game",
              "text": "Chess",
              "type": "button",
              "value": "chess"
          },
          {
              "name": "game",
              "text": "Falken's Maze",
              "type": "button",
              "value": "maze"
          },
          {
              "name": "game",
              "text": "Thermonuclear War",
              "style": "danger",
              "type": "button",
              "value": "war",
              "confirm": {
                  "title": "Are you sure?",
                  "text": "Wouldn't you prefer a good game of chess?",
                  "ok_text": "Yes",
                  "dismiss_text": "No"
              }
          }
      ]
    }
  ]

  res.format({
    'application/json' : function(){
      payload = {"text": "PLEASE CHOOSE ONE", "attachments" : attachments}
      res.status(200).json(payload)
    }
  })
  
})

app.post('/bot/messagemenu', (req, res) => {
  payload = {
    "text": "Would you like to play a game?",
    "response_type": "in_channel",
    "attachments": [
        {
            "text": "Choose a game to play",
            "fallback": "If you could read this message, you'd be choosing something fun to do right now.",
            "color": "#3AA3E3",
            "attachment_type": "default",
            "callback_id": "game_selection",
            "actions": [
                {
                    "name": "games_list",
                    "text": "Pick a game...",
                    "type": "select",
                    "options": [
                        {
                            "text": "Hearts",
                            "value": "hearts"
                        },
                        {
                            "text": "Bridge",
                            "value": "bridge"
                        },
                        {
                            "text": "Checkers",
                            "value": "checkers"
                        },
                        {
                            "text": "Chess",
                            "value": "chess"
                        },
                        {
                            "text": "Poker",
                            "value": "poker"
                        },
                        {
                            "text": "Falken's Maze",
                            "value": "maze"
                        },
                        {
                            "text": "Global Thermonuclear War",
                            "value": "war"
                        }
                    ]
                }
            ]
        }
    ]
  }
  res.status(200).json(payload)
})


app.post('/bot/intractivemsghandler', (req, res) => {
  res.status(200).send("thanks for choosing")
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))