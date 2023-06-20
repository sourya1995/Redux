import logo from './logo.svg';
import './App.css';
import _ from 'lodash';

function App() {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts = {_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId}/>
    </div>
  );
}

export default App;
