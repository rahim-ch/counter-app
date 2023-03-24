import React, { useState } from 'react';
import CounterContext from './CounterContext';

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const contextValue = {
    counter,
    setCounter,
  };

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
