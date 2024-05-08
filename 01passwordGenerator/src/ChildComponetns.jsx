//import React from 'react';
import { PropTypes } from "postcss/lib/lazy-result";
function ChildComponent(props) {
    console.log('the value of onlcic is ',onclick);
  return (
    <button onClick={props.onClick}>
      Click me
    </button>
  );
}

ChildComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ChildComponent;
