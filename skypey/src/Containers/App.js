import logo from './logo.svg';
import './App.css';
import _ from 'lodash';

function App() {
  const { contacts } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts = {_.values(contacts)} />
      <Main />
    </div>
  );
}

export default App;
