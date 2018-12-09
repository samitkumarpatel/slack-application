# slack-application
All the below slack expectation can build through a slack app. after creating the slack app you can assign that app to your own workspace or you can assign and share with another workspace.

To create an app, click on +app on your workspace, after that it will redirect to api.slack.com/apps/<<SOME_ID?creaed01>>, after that you have to choose what do you need from the below - 

- Slash command
- Custom integration
- Message Buttons
- The event api
- Build internal integration as part of slack api

### Slash command
### ------------------------
Slash Commands are initiated from the message box in Slack, but they aren't messages. A submitted Slash Command will cause a payload of data to be sent from Slack to an app, allowing the app to respond in whatever way it wants.

The pre build slash command are /who , /topic and /remind and etc..

or might be the customized slack command will look like this if my expectation will build a /todo slash command
/todo ask @samit to do some poc around slack in #general 

for more information follow - https://api.slack.com/slash-commands 
also - https://tutorials.botsfloor.com/creating-a-slack-command-bot-from-scratch-with-node-js-distribute-it-25cf81f51040 


### --------------------------
Once you did everything that you need, you have to activate/install the apps to your workspace, also you can restrict which channel can use that and etc..


- slack button
the slack button is quite a simple and you can achieve some approval process with it.
to achieve the message click event you need to interact - interactive message framework (https://api.slack.com/interactive-messages ) 

- slack button line
It will give you the capabilities like a hyperlink. once you click the button like it will take you to the defined link(https://api.slack.com/docs/message-attachments#link_buttons) 


### ---------------
### development of /slash command
1. login to the slack
2. make sure your user is attached to admin group to access slack apps
3. click on the profile--administration--manage apps. after that you will be redirected to https://<<your_slack_instance>>.slack.com/apps/manage
4. In the search box search for "slash command". from the auto suggestion list click on "slash command"
5. after that it will redirect you to "Slash Commands" configuration. Here if you have already some slash command you can see that and change the config if you want. If you need a new slash command to create just click "add configuration"
6. it will prompt you a slash command name and other configs details
7. all the slash command expectation help can be found on that page
