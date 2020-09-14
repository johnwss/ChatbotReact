class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("rastreio por e-mail")) {
        this.actionProvider.handleJavascriptList();
      }
    }
  }
  
  export default MessageParser;