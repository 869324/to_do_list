import React from 'react';
import './App.css';

import Input from './Components/Input/Input';
import List from './Components/List/List';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }

    this.add = this.add.bind(this);
  }

  add(task) {
    this.setState(state => {
      const newList = [...state.todos];
      newList.push(task);
      return { todos: newList };
    })
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Input add={this.add} />
        <List todos={this.state.todos} />
      </div>
    );
  }

}

export default App;
