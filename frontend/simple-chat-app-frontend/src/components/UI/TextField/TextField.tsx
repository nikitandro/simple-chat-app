import { observer } from 'mobx-react-lite';
import { HTMLAttributes } from 'react';
import './TextField.scss';

export const TextField = observer((props: HTMLAttributes<HTMLInputElement>) => {
  return (
    <div className='textField-container' {...props}>
      <input {...props} />
    </div>
  );
});
