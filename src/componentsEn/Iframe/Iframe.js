import React from 'react';

const IFrame = ({ width, height, src }) => (
  <iframe
    width={width}
    height={height}
    src={src}
    style={{ display: 'initial', position: 'relative' }}
    allowFullScreen
  />
);

export default IFrame;
