const IncomingWebhook = require("@slack/client").IncomingWebhook;
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
const webhook = new IncomingWebhook(SLACK_WEBHOOK_URL);

const eventToBilling = (data) => {
  return JSON.parse(new Buffer(data, "base64").toString());
};

const createSlackMessage = (pubsubMessage) => {
  let message = {
    text: `Budget Amount: ${pubsubMessage.budgetAmount}, CostAmount: ${pubsubMessage.costAmount}, Budget: ${pubsubMessage.budgetDisplayName}`,
    mrkdwn: true,
  };
  return message;
};


module.exports.subscribe = (event, callback) => {
const pubsubMessage = eventToBilling(event.data);

// Send message to Slack.
  const message = createSlackMessage(pubsubMessage);
  webhook.send(message, (err, res) => {
    if (err){
      console.log("Cannot send message to slack!");
    }
    callback(err);
  });
};
