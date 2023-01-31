import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import './App.scss';
import { Button } from './components/UI/Button/Button';
import { TextField } from './components/UI/TextField/TextField';
import User from './mobX/User';
import { Router } from './routing/Router';

const App = observer(() => {
  return (
    <div className='App'>
      <Router />
    </div>
  );
});

export default App;
