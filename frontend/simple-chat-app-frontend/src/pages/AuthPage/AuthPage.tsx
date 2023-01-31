import { observer } from 'mobx-react-lite';
import { Container } from '../../components/UI/Container/Container';
import { Button } from '../../components/UI/Button/Button';
import { TextField } from '../../components/UI/TextField/TextField';
import './AuthPage.scss';
import { LinkUI } from '../../components/UI/LinkUI/LinkUI';
import { CSSProperties, useState } from 'react';
import { ChangeEvent } from 'react';
import User from '../../mobX/User';
import { useNavigate } from 'react-router-dom';

export const AuthPage = observer(() => {
  const [activeLink, setActiveLink] = useState<'login' | 'reg'>('reg');

  return (
    <Container className='auth-page'>
      <Container className='auth-wrapper'>
        <Container className='auth-controls'>
          <Container className='auth-links'>
            <LinkUI onClick={() => setActiveLink('login')}>Log In</LinkUI>
            <LinkUI onClick={() => setActiveLink('reg')}>Register</LinkUI>
          </Container>
          {activeLink === 'login' ? (
            <LoginControls />
          ) : activeLink === 'reg' ? (
            <RegisterControls />
          ) : (
            <span>Something went wrong...</span>
          )}
        </Container>
      </Container>
    </Container>
  );
});

const LoginControls = () => {
  const inputsStyles: CSSProperties = { width: '100%' };

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const user = User;

  const setEmailFieldState = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const setPasswordFieldState = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const sendLoginRequest = async () => {
    const response = await user.login({ email, password });

    if (response?.ok) {
      navigate('/');
    }
  };

  return (
    <>
      <TextField
        placeholder='E-mail'
        style={inputsStyles}
        onChange={setEmailFieldState}
      />
      <TextField
        placeholder='Password'
        style={inputsStyles}
        onChange={setPasswordFieldState}
      />
      <Button onClick={sendLoginRequest}>Log In</Button>
    </>
  );
};

const RegisterControls = () => {
  const inputsStyles = { width: '100%' };

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();

  const user = User;

  const setNameFieldState = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const setEmailFieldState = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const setPasswordFieldState = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const sendRegisterRequest = async () => {
    const response = await user.register({ name, email, password });

    if (response?.ok) {
      navigate('/');
    }
  };

  return (
    <>
      <TextField
        placeholder='Name'
        style={inputsStyles}
        onChange={setNameFieldState}
      />
      <TextField
        placeholder='E-mail'
        style={inputsStyles}
        onChange={setEmailFieldState}
      />
      <TextField
        placeholder='Password'
        style={inputsStyles}
        onChange={setPasswordFieldState}
      />
      <Button onClick={sendRegisterRequest}>Register</Button>
    </>
  );
};
