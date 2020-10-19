import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//---------React.memo--to stop re rendering the component------------------//
const Header = React.memo(props => {
    return(
        <header>
            <nav className = "navBar wrapper">
                <div className = "logo">                  
                    <h1>penDown<FontAwesomeIcon icon="feather-alt" size="1x"/></h1>
                </div>               
                <ul className = "clearfix navItem">
                    <li><a href = "#" onClick = {() => {props.action("home")}}>home</a></li>
                    <li><a href = "#" onClick = {() => {props.action("compose")}}>compose</a></li>
                </ul>
            </nav>
        </header>
    );   
});
export default Header;