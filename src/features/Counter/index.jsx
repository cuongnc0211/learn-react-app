import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './counterSlice';

CounterFeature.propTypes = {
  
};

function CounterFeature(props) {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const handleIncreaseClick = () => {
    const action = increase('sample payload'); //action creator
    dispatch(action);
  }

  const handleDecreaseClick = () => {
    const action = decrease('sample payload');
    dispatch(action);
  }

  return (
    <div>
      Counter: {counter}

      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
        <button onClick={handleDecreaseClick}>Increase</button>
      </div>
    </div>
  );
}

export default CounterFeature;