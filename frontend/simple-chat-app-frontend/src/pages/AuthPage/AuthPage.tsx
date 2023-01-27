import { observer } from 'mobx-react-lite';
import { Container } from '../../components/UI/Container/Container';
import { Button } from '../../components/UI/Button/Button';
import { TextField } from '../../components/UI/TextField/TextField';
import './AuthPage.scss';
import { LinkUI } from '../../components/UI/LinkUI/LinkUI';
import { useEffect, useState } from 'react';

export const AuthPage = observer(() => {
  const inputsStyles = { width: '100%' };
  const [activeLink, setActiveLink] = useState<'login' | 'reg'>('reg');
  useEffect(() => {
    console.log(activeLink);
  }, [activeLink]);

  return (
    <Container className='auth-page'>
      <Container className='auth-wrapper'>
        <Container className='auth-controls'>
          <Container className='auth-links'>
            <LinkUI onClick={() => setActiveLink('login')}>Log In</LinkUI>
            <LinkUI onClick={() => setActiveLink('reg')}>Register</LinkUI>
          </Container>
          <TextField placeholder='E-mail' style={inputsStyles} />
          <TextField placeholder='Password' style={inputsStyles} />
          <Button>Log In</Button>
        </Container>
      </Container>
    </Container>
  );
});

const LoginControls = () => {
  return;
};
