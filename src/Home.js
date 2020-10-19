//-----------------------------Called from App.js Display dairy entries on home page-------------------//
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = (props) => {

    return(
        <div className = "note">
            <div className = "noteTitle clearfix">
                <h2>{props.displayContent.title.substring(0,40)}</h2>
                <h3>{props.displayContent.date}</h3>
            </div>
            <div className = "noteContent">
                <p>{props.displayContent.content.substring(0,45)}</p>
                <div className = "noteContentButton">
                    <button onClick = {() => {props.deleteEntry(props.id)}} aria-label="button to delete the selected note entry">
                        <FontAwesomeIcon icon="trash-alt"/>
                    </button>
                    <button onClick = {() => {props.expandEntry(props.id)}} aria-label="button to expand the selected note entry to read more">
                        <FontAwesomeIcon icon = "expand-alt"/>
                    </button>
                </div>
            </div>                 
        </div>
    );
}
export default Home;