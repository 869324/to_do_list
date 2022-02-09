import React from 'react';
import styles from './Input.module.css';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import { addTask } from '../Redux/todoReducer';

function Input(props) {
    const tasks = useSelector(state => state);
    const dispatch = useDispatch();

    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");

    function getRandomId() {
        const id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        const index = tasks.find(task => task.taskId == id);
        if (index > -1) {
            getRandomId();
        }

        else {
            return id;
        }
    }

    function changeDesc(event) {
        setDesc(event.target.value);
    }

    function changeDate(event) {
        setDate(event.target.value);
    }

    function submit(event) {
        event.preventDefault();

        const task = {
            taskId: getRandomId(),
            desc: desc,
            date: date,
            completed: false
        };

        dispatch(addTask(task));
        swal("Task has been added!", {
            icon: "success",
        });

        // const navigate = useNavigate();
        // navigate("/");
    }

    let button;
    if (date == "" || desc == "") {
        button = <button className={styles.disabled} disabled>Add Task</button>
    }
    else {
        button = <button id={styles.button} >Add Task</button>
    }

    return (
        <div id={styles.Input}>
            <h2 id={styles.h2}>Add Tasks</h2>
            <form className={styles.form} onSubmit={submit}>
                <input id={styles.desc} type="text" value={desc} onChange={changeDesc} placeholder="Task Description" required />
                <div id={styles.dateDiv}>
                    <label id={styles.dateLabel}>Date Due:</label>
                    <input id={styles.date} type="date" value={date} onChange={changeDate} required />
                </div>
                {button}
            </form>

        </div>
    );

}

export default Input;
