import { observer } from 'mobx-react-lite';
import React from 'react';
import { MutableRefObject } from 'react';
import { Ref, TextareaHTMLAttributes } from 'react';
import { Container } from '../UI/Container/Container';
import './ChatInputField.scss';

export const ChatInputField = observer(
  React.forwardRef(
    (
      props: TextareaHTMLAttributes<HTMLTextAreaElement>,
      ref: React.ForwardedRef<HTMLTextAreaElement>
    ) => {
      return (
        <Container className='chat-input-field-wrapper'>
          <textarea className='chat-input-field' ref={ref} {...props} />
        </Container>
      );
    }
  )
);

// export const ChatInputField = React.forwardRef(
//   observer((props: TextareaHTMLAttributes<HTMLTextAreaElement>, ref: any) => {
//     return (
//       <Container className='chat-input-field-wrapper'>
//         <textarea className='chat-input-field' {...props} />
//       </Container>
//     );
//   })
// );
