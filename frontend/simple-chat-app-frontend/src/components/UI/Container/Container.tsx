import { observer } from 'mobx-react-lite';
import { HTMLAttributes } from 'react';

export const Container = observer((props: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props}></div>;
});
