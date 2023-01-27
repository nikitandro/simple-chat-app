import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';
import { AuthPage } from '../pages/AuthPage/AuthPage';

export const Router = observer(() => {
  return (
    <Routes>
      <Route path='/'>
        <Route path='auth' element={<AuthPage />} />
      </Route>
    </Routes>
  );
});
