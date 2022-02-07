import React from 'react';
import './List.css';

import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const table = [];

        const header = <tr>
            <th>Task No</th>
            <th>Description</th>
            <th>Date</th>
            <th>Completed</th>
            <th>Edit</th>
            <th>delete</th>
        </tr>
        table.push(header)

        const list = this.props.todos.map((task, id) => {
            const row = <tr key={id}>
                <td>{id + 1}</td>
                <td>{task.desc}</td>
                <td>{task.date}</td>
                <td><input type="checkbox" checked={task.completed} onChange={() => this.props.changeComplete(task.id, !task.completed)} /></td>
                <td><AiFillEdit onClick={() => this.props.showEditor(id, true)} /></td>
                <td><MdDelete onClick={() => this.props.delete(id)} /></td>
            </tr>
            return row;
        });

        table.push(list);

        return (
            <div id="List">
                <h2>Your Tasks</h2>
                {this.props.todos.length > 0 ? <table id="listTable">{table}</table> : <p>No tasks Yet! What a waste ha! ha!</p>}
            </div>
        );
    }

}

export default List;
