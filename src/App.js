import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
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
        <Header />
        <main>
          <Input add={this.add} />
          <List todos={this.state.todos} />
        </main>
      </div>
    );
  }

}

export default App;
