import { observer } from 'mobx-react-lite';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RequireAuth } from '../hoc/RequireAuth';
import { AuthPage } from '../pages/AuthPage/AuthPage';
import { ChatPage } from '../pages/ChatPage/ChatPage';
import User from '../mobX/User';

export const Router = observer(() => {
  const user = User;
  return (
    <Routes>
      <Route path='/'>
        <Route
          index
          element={
            <RequireAuth>
              <ChatPage />
            </RequireAuth>
          }
        />
        <Route
          path='auth'
          element={user.isAuth ? <Navigate to='/' /> : <AuthPage />}
        />
      </Route>
    </Routes>
  );
});
