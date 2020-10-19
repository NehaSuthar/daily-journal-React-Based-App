//--------------Called from App.js expand theh dairy entry shown on home page on click of expand button-------------------//
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Expand = (props) => {
    const {content, title, date} = props.recordInFocus.dairyContent;//destructure the props object
    return(
        <div className = "wrapper">
            <div className = "expandNoteContainer">
                <div className = "expandNoteeHeader">       
                    <h2>{title}</h2>
                    <h3>{date}</h3>
                </div>
                <div className = "expandNoteContent">
                    <p>{content}</p>
                </div> 
                <div className = "noteComposeButton">
                    <button onClick = {props.closeExpandedNote} aria-label = "button to close the current note and to go back to home page">
                        <FontAwesomeIcon icon = "times-circle"/>
                    </button>
                    <button onClick = {() => {props.deleteEntry( props.recordInFocus.key)}} aria-label="button to delete the note entry">
                        <FontAwesomeIcon icon="trash-alt"/>
                    </button>
                </div>              
            </div>
        </div>
    );
}
export default Expand;