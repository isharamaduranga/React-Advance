import React from 'react';

import './Button.css'

const Button = (props) => {
  console.log('Button RUNNING');
  return (
      <button
          type={props.type || 'button'}
          className={`button ${props.className}`}
          onClick={props.onClick}
          disabled={props.disabled}
      >
        {props.children}
      </button>
  );
};

export default React.memo(Button);