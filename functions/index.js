/*eslint-disable*/

const functions = require("firebase-functions");
const admin = require('firebase-admin')
const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: 'LXACARs/0z9x7B36qFuW5MuIRz846LLodtNoXzzEYxe+fHHkrD68v64bPz1+t3X7rzKDIjPBdljjz9/tyFApElnifb90tg8qqyGoo44BDx38Imz7+2el0Ijtr0ZsqeiI7lio5/Bn7MmMdlHERRHtAgdB04t89/1O/w1cDnyilFU='
});

admin.initializeApp()

// my user id : "U723af8a9130176176ee3d936de8f06e5"

exports.sendMessage = functions.https.onCall((data, context) => {
  console.log('function sendMessage start')
  console.log({ data })

  const { name, mail, message } = data

  const sendText = `メッセージが送信されました。\n名前：${name}\nメールアドレス：${mail}\nメッセージ：${message}`

  const sendMessage = {
    type: 'text',
    text: sendText
  };

  client.pushMessage('U2bf923bc408382c0a31b355bd0755888', sendMessage)
    .then(() => {
      console.log("success")
    })
    .catch((err) => {
      console.log(err)
    });
  return null
})
