function sendMessage(messageObj, messageText){
  return axiosInstance.get("sendMessage", {
    chat_id: messageObj.chat.id,
    text: messageText,
  });
}

function handleMessage(messageObj){
  const messageText = messageObj.text || "";

  if(messageText.chart(0) === "/"){
    const command = messageText.substr(1);
    switch (command) {
      case "start":
        return sendMessage(
          messageObj,
          "Hi! I'm a bot"
        )
      default:
        return sendMessage(messageObj, "Hey! I don't know that command!")
    }
  } else{
    return sendMessage(messageObj, messageText);
  }
}

module.exports = { handleMessage };