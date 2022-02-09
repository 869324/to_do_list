import React from 'react';
import './List.css';

import Editor from '../Editor/Editor';
import { deleteTask, markComplete } from '../Redux/todoReducer';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import swal from 'sweetalert';

import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

function List(props) {
    const tasks = useSelector(state => state);
    const dispatch = useDispatch();

    const [editor, setEditor] = useState(false);
    const [task, setTask] = useState({});

    function showEditor(task, status) {
        setTask(task);
        setEditor(status);
    }

    function handleComplete(id, status) {
        dispatch(markComplete(id, status));
    }

    function handleDelete(taskId) {
        console.log(taskId)
        swal({
            title: "Are you sure?",
            text: "Once deleted this task cannot be recovered!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                dispatch(deleteTask(taskId));

                swal("Task has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Deletion aborted!");
            }
        });
    }

    if (tasks.length > 0) {
        return (<div id="List">
            {editor && <Editor task={task} setEditor={setEditor} />}
            <h2>Your Tasks</h2>
            <table id="listTable">
                <tr>
                    <th>Task No</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Completed</th>
                    <th>Edit</th>
                    <th>delete</th>
                </tr>

                {
                    tasks.map((task, id) => {
                        const row = <tr key={id}>
                            <td>{id + 1}</td>
                            <td>{task.desc}</td>
                            <td>{task.date}</td>
                            <td><input type="checkbox" checked={task.completed} onChange={() => handleComplete(task.taskId, !task.completed)} /></td>
                            <td><AiFillEdit onClick={() => showEditor(task, true)} /></td>
                            <td><MdDelete onClick={() => handleDelete(task.taskId)} /></td>
                        </tr>
                        return row;
                    })
                }
            </table>
        </div>);
    }

    else {
        return (
            <div id="List">
                <h2>Your Tasks</h2>
                <p>No tasks Yet! What a waste ha! ha!</p>
            </div>
        );
    }
}

export default List;
