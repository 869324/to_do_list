import React from 'react';
import styles from './Editor.module.css';

class Editor extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            desc: "",
            date: ""
        }

        this.changeDesc = this.changeDesc.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.edit = this.edit.bind(this);
    }

    componentDidMount() {
        this.setState({
            desc: this.props.task.desc,
            date: this.props.task.date
        });
    }

    changeDesc(event) {
        this.setState({desc: event.target.value});
    }

    changeDate(event) {
        this.setState({date: event.target.value});
    }

    edit() {
        this.props.edit({
            id: this.props.task.id,
            desc: this.state.desc,
            date: this.state.date
        });

        this.props.showEditor(this.props.task.id, false);
    }

    render() {
        return(
            <div className={styles.editor}>
                <div className={styles.content}>
                    <button id={styles.closeBtn} onClick={() => this.props.showEditor(this.props.task.id, false)}>+</button>
                    <h2>Edit task: {this.props.task.id + 1}</h2>
                    <div id={styles.form}>
                        <input className={styles.input} value={this.state.desc} onChange={this.changeDesc} />
                        <input className={styles.input} type="date" value={this.state.date} onChange={this.changeDate} />
                        <button id={styles.editBtn} onClick={this.edit}>Edit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Editor;