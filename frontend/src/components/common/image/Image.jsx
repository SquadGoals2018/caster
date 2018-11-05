import React from 'react';

import './Image.scss';

const Image = ({ className, src }) => (
  <div className={className}>
    <img src={src} className="image" alt="caster" />
  </div>
);

export default Image;
