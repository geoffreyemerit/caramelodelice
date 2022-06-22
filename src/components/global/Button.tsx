import React from 'react';

import IButton from '../../interfaces/IButton';

const Button = ({ text, className }: IButton) => {

  return <div className={className}><div className={`${className}__h1`}>{text}</div>
  </div>;
};

export default Button;