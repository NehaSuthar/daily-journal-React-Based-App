import React from 'react';

//---------React.memo--to stop re rendering the component------------------//
const Footer = React.memo( () => {
    const year = new Date().getFullYear();
    return(
        <footer>
            <div className = "wrapper">
                <p>Copyright ⓒ {year}</p>
            </div>
        </footer>
    );
});
export default Footer;