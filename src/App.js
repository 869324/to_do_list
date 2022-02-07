import React from 'react';
import './App.css';

import swal from 'sweetalert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Input from './Components/Input/Input';
import List from './Components/List/List';
import CompletedTasks from './Components/CompletedTasks/CompletedTasks';
import Editor from './Components/Editor/Editor';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      showEditor: false,
      id: ''
    }

    this.add = this.add.bind(this);
    this.changeComplete = this.changeComplete.bind(this);
    this.edit = this.edit.bind(this);
    this.showEditor = this.showEditor.bind(this);
    this.delete = this.delete.bind(this);
  }

  add(task) {
    this.setState(state => {
      const newList = [...state.todos];
      newList.push(task);
      return { todos: newList };
    })

console.log(this.props);
    this.props.history.push("/");

    swal("Task has been added!", {
          icon: "success",
        });
  }

  edit(task) {
    this.setState(state => {
      const newList = [...state.todos];
      const task1 = newList[task.id];
      task1.desc = task.desc;
      task1.date = task.date;
      newList.splice(task.id, 1, task1);
      return { todos: newList };
    })

    swal("Task has been updated!", {
          icon: "success",
        });
  }

  delete(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted this task cannot be recovered!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.setState(state => {
          const newList = [...state.todos];
          newList.splice(id, 1);
          return { todos: newList };
      })

        swal("Task has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Deletion aborted!");
      }
    });
  }

  showEditor(id, status) {
    this.setState({id: id, showEditor: status});
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
        <div className="App">
          <Header />
          {this.state.showEditor && <Editor task={this.state.todos[this.state.id]} showEditor={this.showEditor} edit={this.edit}  />}
          <main>
            <Routes>
              <Route exact path="/" element={<List todos={this.state.todos} changeComplete={this.changeComplete} showEditor={this.showEditor} delete={this.delete} />} ></Route>
              <Route exact path="/Input" element={<Input todos={this.state.todos} add={this.add} />} ></Route>
              <Route exact path="/CompletedTasks" element={<CompletedTasks todos={this.state.todos} />} ></Route>
            </Routes>
          </main>
        </div>
    );
  }

}

export default App;
