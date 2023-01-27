import { observer } from 'mobx-react-lite';
import React from 'react';
import './App.scss';
import { Button } from './components/UI/Button/Button';
import { TextField } from './components/UI/TextField/TextField';
import { Router } from './routing/Router';

const App = observer(() => {
  return (
    <div className='App'>
      <Router />
    </div>
  );
});

export default App;
