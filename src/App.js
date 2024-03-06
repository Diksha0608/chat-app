import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        <ChatEngine
          height='100vh'
          projectID='d4fba653-4b15-4d34-98c0-29ece39df35c'
          userName='Rob'
          userSecret='qwert12345'
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

        />
      </h1>
    </div>
  );
}

export default App;
