import { observer } from 'mobx-react-lite';
import { HTMLAttributes } from 'react';
import './LinkUI.scss';

export const LinkUI = observer((props: HTMLAttributes<HTMLDivElement>) => {
  return <div className='link-container' {...props}></div>;
});
