import React from 'react';
import './Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskName: "",
            desc: "",
            date: "",
        }

        this.changeName = this.changeName.bind(this);
        this.changeDesc = this.changeDesc.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.add = this.add.bind(this);
    }

    changeName(event) {
        this.setState({ taskName: event.target.value });
    }

    changeDesc(event) {
        this.setState({ desc: event.target.value });
    }

    changeDate(event) {
        this.setState({ date: event.target.value });
    }

    add(event) {
        event.preventDefault();

        this.props.add({
            taskName: this.state.taskName,
            desc: this.state.desc,
            date: this.state.date
        });
    }

    render() {
        return (
            <div className="Input">

                <form>
                    <input id="taskName" type="text" onChange={this.changeName} placeholder="Task Name" required />
                    <input id="desc" type="text" onChange={this.changeDesc} placeholder="Task Description" required />
                    <label id="dateLabel">Date Due<input id="date" type="date" onChange={this.changeDate} required /></label>
                    <button onClick={this.add}>Add Task</button>
                </form>

            </div>
        );
    }

}

export default Input;
