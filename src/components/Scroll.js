import React from 'react';

const Scroll = (props) => {
  return (
    <div className="scroll-content">
      {props.children}
    </div>
  );
};

export default Scroll;