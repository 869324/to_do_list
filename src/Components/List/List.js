import React from 'react';
import './List.css';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const table = [];

        const header = <th>
            <td>Name</td>
            <td>Description</td>
            <td>Date</td>
        </th>
        table.push(header)

        const list = this.props.todos.map(task => {
            const row = <tr>
                <td>{task.taskName}</td>
                <td>{task.desc}</td>
                <td>{task.date}</td>
            </tr>
            return row;
        });

        table.push(list);

        return (
            <div className="List">
                <table>{table}</table>
            </div>
        );
    }

}

export default List;
