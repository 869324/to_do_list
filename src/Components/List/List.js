import React from 'react';
import './List.css';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const table = [];

        const header = <tr>
            <th>Task No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
        </tr>
        table.push(header)

        const list = this.props.todos.map((task, id) => {
            const row = <tr key={id}>
                <td>{id + 1}</td>
                <td>{task.taskName}</td>
                <td>{task.desc}</td>
                <td>{task.date}</td>
            </tr>
            return row;
        });

        table.push(list);

        return (
            <div id="list">
                <h2>Your Tasks</h2>
                {this.props.todos.length > 0 ? <table>{table}</table> : <p>No tasks Yet! What a waste ha! ha!</p>}
            </div>
        );
    }

}

export default List;
