class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
      }
      //    for the function greet, create a bot message that says 'hello friend'

      greet=()=> {
        const message = this.createChatBotMessage("Hi, friend.")
        this.addMessageToState(message)
      }

      handleJavascriptQuiz = ()=>{
        const message = this.createChatBotMessage("Here are your questions!",
            {
                widget:"javascriptQuiz"
            }
        )
        this.addMessageToState(message)
      }

//    this function has access to all of the chabots states, this is like a global state holding
// this preserves the previous state when updating message rendered to the chabot screen
   addMessageToState = (message)=>{
    this.setState(prevState =>({
        ...prevState,
        // this brings the old messages and adds the new message to the state
        messages:[...prevState.messages, message]
    }));
   };
 }
 
 export default ActionProvider;