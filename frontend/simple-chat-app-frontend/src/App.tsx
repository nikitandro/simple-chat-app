import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import './App.scss';
import User from './mobX/User';
import { Router } from './routing/Router';

const App = observer(() => {
  useEffect(() => {
    User.fetchUser();
  }, []);
  return (
    <div className='App'>
      <Router />
    </div>
  );
});

export default App;
