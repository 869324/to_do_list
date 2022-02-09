import styles from './Editor.module.css';
import { editTask } from '../Redux/todoReducer';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';

export default function Editor(props) {
    const dispatch = useDispatch();
    const [desc, setDesc] = useState(props.task.desc);
    const [date, setDate] = useState(props.task.date);

    function changeDesc(event) {
        setDesc(event.target.value);
    }

    function changeDate(event) {
        setDate(event.target.value);
    }

    function submit(event) {
        event.preventDefault();

        dispatch(editTask({
            taskId: props.task.taskId,
            desc: desc,
            date: date,
            completed: props.task.completed
        }));
        swal("Task has been updated!", {
            icon: "success",
        });
    }

    return (
        <div className={styles.editor}>
            <div className={styles.content}>
                <button id={styles.closeBtn} onClick={() => props.setEditor(false)}>+</button>
                <h2>Edit task: {props.task.taskId}</h2>
                <form id={styles.form} onSubmit={submit}>
                    <input className={styles.input} value={desc} onChange={changeDesc} required />
                    <input className={styles.input} type="date" value={date} onChange={changeDate} required />
                    <button id={styles.editBtn} >Edit</button>
                </form>
            </div>
        </div>
    );
}

