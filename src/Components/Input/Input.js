import React from 'react';

import styles from './Input.module.css';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            desc: "",
            date: "",
        }

        this.changeDesc = this.changeDesc.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.add = this.add.bind(this);
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
            id: this.props.todos.length,
            desc: this.state.desc,
            date: this.state.date,
            completed: false
        });

        this.setState({
            date: "",
            desc: ""
        });
    }

    render() {
        const disable = this.state.desc == "" || this.state.date == "";

        let button;
        if (disable) {
            button = <button onClick={this.add} className={styles.disabled} disabled>Add Task</button>
        }
        else {
            button = <button id={styles.button} onClick={this.add}>Add Task</button>
        }
        return (
            <div id={styles.Input}>
                <h2 id={styles.h2}>Add Tasks</h2>
                <form className={styles.form}>
                    <input id={styles.desc} type="text" value={this.state.desc} onChange={this.changeDesc} placeholder="Task Description" required />
                    <div id={styles.dateDiv}>
                        <label id={styles.dateLabel}>Date Due:</label>
                        <input id={styles.date} type="date" value={this.state.date} onChange={this.changeDate} required />
                    </div>
                    {button}
                </form>

            </div>
        );
    }

}

export default Input;
