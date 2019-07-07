### Intercept a channle message and reply

How to start ?
* Login to slack
* Navigate to 
```
https://api.slack.com/apps
https://api.slack.com/apps/<APP_ID>
```
* Select / Create slackbot
* and choose the Features you are intrsted to build

Here we will be doing `Event Subscription`

* Turn On `Enable Events`
* Fill the application Url on `Request URL`  - this request Url 
has to be a `POST` method 
* choose a event for workspace level by selecting `Subscribe to Workspace Events`
* choose a event to `Subscribe to Bot Events` - `message.channels` is to track channel message only
* example , please follow `index.js`
* for more details [click](https://api.slack.com/events/url_verification) here

