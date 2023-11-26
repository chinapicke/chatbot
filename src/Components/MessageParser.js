class MessageParser {
        constructor(actionProvider) {
          this.actionProvider = actionProvider;
        }
      
       

    
    parse(message) {
        const lowerCase = message.toLowerCase()
        //if the users input includes hello, complete the function greet() defined within the actionprovider js file
        if (lowerCase.includes("hello")) {
            this.actionProvider.greet()
          }
          if (lowerCase.includes("javascript")) {
            this.actionProvider.handleJavascriptQuiz()
          }
    }

}

  
  export default MessageParser;