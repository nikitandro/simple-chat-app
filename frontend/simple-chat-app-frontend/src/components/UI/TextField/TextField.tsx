import { observer } from 'mobx-react-lite';
import { HTMLAttributes, InputHTMLAttributes } from 'react';
import './TextField.scss';

export const TextField = observer(
  (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
      <div className='textField-container' {...props}>
        <input {...props} />
      </div>
    );
  }
);
