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
        const disable = this.state.taskName == "" || this.state.desc == "" || this.state.date == ""

        let button;
        if (disable) {
            button = <button onClick={this.add} className="disabled" disabled>Add Task</button>
        }
        else {
            button = <button onClick={this.add}>Add Task</button>
        }
        return (
            <div id="input">
                <h2>Add Tasks</h2>
                <form>
                    <input id="taskName" type="text" onChange={this.changeName} placeholder="Task Name" required />
                    <input id="desc" type="text" onChange={this.changeDesc} placeholder="Task Description" required />
                    <div id="dateDiv">
                        <label id="dateLabel">Date Due:</label>
                        <input id="date" type="date" onChange={this.changeDate} required />
                    </div>
                    {button}
                </form>

            </div>
        );
    }

}

export default Input;
