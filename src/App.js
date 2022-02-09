import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Input from './Components/Input/Input';
import List from './Components/List/List';
import CompletedTasks from './Components/CompletedTasks/CompletedTasks';

function App(props) {

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<List />} ></Route>
          <Route exact path="/Input" element={<Input />} ></Route>
          <Route exact path="/CompletedTasks" element={<CompletedTasks />} ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
