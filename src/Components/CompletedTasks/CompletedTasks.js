import React from 'react';
import './CompletedTasks.css';

import { useSelector } from 'react-redux';

export default function CompletedTasks(props) {
    const tasks = useSelector(state => state).filter(task => task.completed);

    if (tasks.length > 0) {
        return (
            <div id="list">
                <h2>Completed Tasks</h2>
                <table id="completeTable">
                    <tr>
                        <th>Task No</th>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>

                    {
                        tasks.map((task, id) => {
                            const row = <tr key={id}>
                                <td>{id + 1}</td>
                                <td>{task.desc}</td>
                                <td>{task.date}</td>
                            </tr>
                            return row;
                        })
                    }
                </table>
            </div>
        );
    }

    else {
        return (
            <p>No complete tasks Yet. Work harder!</p>
        );
    }

}



