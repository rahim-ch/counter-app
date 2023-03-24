import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Page = () => {
  const { counter, setCounter } = useContext(CounterContext);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Page;
