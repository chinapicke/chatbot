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
                    question:'What is javascript?',
                    answerOptions:[
                        {id:1,
                        text:'A language',
                        letter:'A',
                        isCorrect:true
                        },
                        {id:2,
                        text:'A data type',
                        letter:'B',
                        isCorrect:false
                        },
                        {id:3,
                            text:'A function',
                            letter:'C',
                            isCorrect:false
                            },

                    ],
                    answer:'A: A langugage',
                    id:1
                },
                {
                    question:'How many primitive data types are there?',
                    answerOptions:[
                        {
                        id:1,
                        text:5,
                        letter:'A',
                        isCorrect:false
                        },
                        {
                            id:2,
                        text:7,
                        letter:'B',
                        isCorrect:true
                        },
                        {id:3,
                            text:6,
                            letter:'C',
                            isCorrect:false
                        }
                    ],
                    answer:'B: 7',
                    id:2
                }
            ]
           }
        },
     ],

 }

export default config