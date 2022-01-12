import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import { ExpandMore, Language } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
// import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            {/* <Link to="/"> */}
            <div className="header__icon">
                <img  src="./agenz_logo.png" alt="agenz logo" />
            {/* </Link> */}
            </div>

            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <Language />
                <ExpandMore />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
