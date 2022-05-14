import React from 'react';
import ReactDOM from 'react-dom';

const Container1 = () => {
    const style = {
        position: 'fixed',
        left: '30px',
        top: '10px',
        background: '#e0e39a',
        width: '100px',
        height: '100px',
        zIndex: '1'
    };
    return (
      <div style={style}>
        z-index: 1
      </div>
    );
};

export default Container1;
