import { createChatBotMessage } from "react-chatbot-kit";
import BotOptions from "./BotOptions";
import JavascriptQuiz from "./JavascriptQuiz";

// const config = {
//   initialMessages: [createChatBotMessage(`What can we help you with today?`)]
// }
const config = {
    botName:'HelpingBot',
    initialMessages: [
        createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
          widget: "options",
        }),
      ],
     widgets: [
         {
             widgetName: "options",
            widgetFunc: (props) => <BotOptions {...props} />,
         },
         {
            widgetName: "javascriptQuiz",
           widgetFunc: (props) => <JavascriptQuiz {...props} />,
           props:{
            questions:[
                {
                    question:'What is javascript',
                    answer:'A langugage',
                    id:1
                },
                {
                    question:'What are the primitive data types',
                    answer:'String, number, boolean, null, undefined, symbol, bigint',
                    id:2
                }
            ]
           }
        },
     ],

 }

export default config