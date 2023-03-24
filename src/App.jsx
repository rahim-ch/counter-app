import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Page from "./Page";
import CounterProvider from './CounterProvider';

function App() {
  return (
    <CounterProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/page1" element={<Page />} />
          <Route path="/page2" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </CounterProvider>
  );
}

export default App;

