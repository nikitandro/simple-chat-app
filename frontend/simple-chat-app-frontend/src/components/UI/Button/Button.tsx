import { observer } from 'mobx-react-lite';
import { HTMLAttributes } from 'react';
import './Button.scss';

export const Button = observer((props: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className='button-container'>
      <button {...props}></button>
    </div>
  );
});
