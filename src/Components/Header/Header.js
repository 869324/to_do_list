import React from 'react';
import './Header.css';

//import avatar from '../images/avatar.jpg';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let date = new Date();
        const today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        return (
            <div id="header">
                <label id="headerDateLabel">Today Is: <label id="headerDate">{today}</label></label>
                <h1>To Do List</h1>
                <div id="user">
                    <label id="username">Guest</label>
                    <img id="avatar" src="images/avatar.jpg" />
                </div>
            </div>
        );
    }
}

export default Header;
