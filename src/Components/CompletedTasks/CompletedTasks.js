import React from 'react';
import './CompletedTasks.css';

class CompletedTasks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const tasks = this.props.todos.filter(task => task.completed);
        const table = [];

        const header = <tr>
            <th>Task No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
        </tr>
        table.push(header)

        const list = tasks.map((task, id) => {
            const row = <tr key={id}>
                <td>{id + 1}</td>
                <td>{task.name}</td>
                <td>{task.desc}</td>
                <td>{task.date}</td>
            </tr>
            return row;
        });

        table.push(list);

        return (
            <div id="list">
                <h2>Completed Tasks</h2>
                {tasks.length > 0 ? <table id="completeTable">{table}</table> : <p>No complete tasks Yet. Work harder!</p>}
            </div>
        );
    }

}

export default CompletedTasks;
