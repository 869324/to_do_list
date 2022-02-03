import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Input from './Components/Input/Input';
import List from './Components/List/List';
import CompletedTasks from './Components/CompletedTasks/CompletedTasks';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }

    this.add = this.add.bind(this);
    this.changeComplete = this.changeComplete.bind(this);
  }

  add(task) {
    console.log(task);
    this.setState(state => {
      const newList = [...state.todos];
      newList.push(task);
      return { todos: newList };
    })
  }

  changeComplete(id, status) {
    this.setState(state => {
      const newList = [...state.todos];
      newList[id].completed = status;
      return { todos: newList };
    });
  }

  render() {
    console.log(this.state.todos)
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route exact path="/" element={<List todos={this.state.todos} changeComplete={this.changeComplete} />} ></Route>
              <Route exact path="/Input" element={<Input todos={this.state.todos} add={this.add} />} ></Route>
              <Route exact path="/CompletedTasks" element={<CompletedTasks todos={this.state.todos} />} ></Route>
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
