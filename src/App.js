import Chatbot from 'react-chatbot-kit'
import './App.css';
import config from './Components/config';
import ActionProvider from './Components/ActionProvider';
import MessageParser from './Components/MessageParser';
import 'react-chatbot-kit/build/main.css'

function App() {
  return (
    <div className="App">
      <div className='chatBotContainer'>
      <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />      </div>
    </div>
  );
}
export default App;
