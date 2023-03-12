import logo from '../logo.svg';
import './App.css';
import Main from '@layouts/Main';
import Translation from '@components/Translation';

function App() {
  return (
    <Translation>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Main />
          </a>
        </header>
      </div>
    </Translation>
  );
}

export default App;
