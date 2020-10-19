//-----------------------------Called from App.js Display prev and next buttons on home page-------------------//
import React from 'react';

const NavButton = React.memo( props => {
   return(
        <div className="navButtonContainer">
            <button disabled = {props.startCounter} className="navBtn" onClick={props.updateCounter} name="prev" aria-label ="click on button to go to previous page">&laquo;</button>
            <button disabled = {props.endCounter} className="navBtn" onClick={props.updateCounter} name="next" aria-label ="click on button to go to next page">&raquo;</button>
        </div>
   ) ;
});
export default NavButton;