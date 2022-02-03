import React from 'react';
import './Header.css';

import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let date = new Date();
        const today = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

        return (
            <div id="header">
                <div>
                    <label id="headerDateLabel">Date:</label>
                    <label id="headerDate">{today}</label>
                </div>
                <div>
                    <NavLink to="/" className="link" activeClassName="selected">Tasks</NavLink>
                    <NavLink to="/Input" className="link" activeClassName="selected">Add Tasks</NavLink>
                    <NavLink to="/CompletedTasks" className="link" activeClassName="selected">CompletedTasks</NavLink>
                </div>
                <div id="user">
                    <label id="username">Guest</label>
                    <img id="avatar" src="images/avatar.jpg" />
                </div>
            </div>
        );
    }
}

export default Header;
