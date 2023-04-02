import logo from './logo.svg';
import './App.css';
import FlashCardList from './FlashCardList';
import FlashCardBuilder from './FlashCardBuilder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <FlashCardList></FlashCardList>
      <FlashCardBuilder onAdd={} ></FlashCardBuilder>
    </div>
  );
}

export default App;
