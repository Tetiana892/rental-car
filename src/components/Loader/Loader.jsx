import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{ marginLeft: '40px' }}>
      <ThreeCircles
        height="100"
        width="100"
        color=" #9747FF"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Loader;
