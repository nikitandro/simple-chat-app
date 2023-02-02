import { observer } from 'mobx-react-lite';
import React from 'react';
import { HTMLAttributes } from 'react';

export const Container = observer(
  React.forwardRef(
    (
      props: HTMLAttributes<HTMLDivElement>,
      ref: React.ForwardedRef<HTMLDivElement>
    ) => {
      return <div ref={ref} {...props}></div>;
    }
  )
);
