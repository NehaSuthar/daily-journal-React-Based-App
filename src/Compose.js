//-----------------------------Called from App.js Display form to enter dairy entry-------------------//
import React, { Component} from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Compose extends Component{
    constructor(){
        super();
        this.state = {
            dairyEntry:{
                date:moment().format('YYYY-MM-DD'),//default entry for date input type
                title:'',
                content:''
            }
        }//end of this.state
    }//End of constructor()

    //---------------------------store user inputs in state to push it database-------------------------//
    changeHandler = (event) => {
        const userInputObj = this.state.dairyEntry;
        this.setState({
            dairyEntry:{
                ...userInputObj,//spred to retain previous state
                [event.target.name]:event.target.value
            }
        });//End of this.setState
    }//End of changeHandler = (event)

    render(){//render compose form to get user inputs
         return(
            <div className = "wrapper">
                <form className = "createNote"  action = "submit" onSubmit = {(event) => {this.props.submitHandler(event,this.state.dairyEntry)}}>
                    <div className = "noteTitleHeader">
                        <label htmlFor = "title" className="visuallyHidden">Enter title for the entry</label>
                        <input id = "title" type = "text" name = "title" value = {this.state.dairyEntry.title} placeholder = "Title" maxLength = "40" onChange = {this.changeHandler}/>
                        <label htmlFor = "date" className="visuallyHidden">Select date for the entry</label>
                        <input id = "date" type = "date" name = "date" value = {this.state.dairyEntry.date}  onChange = {this.changeHandler}/>
                        {/*<FontAwesomeIcon icon ="calendar-minus" className="calenderIcon"/>*/}
                    </div>
                    <div className = "noteTextArea">
                        <label htmlFor = "content" className="visuallyHidden">Enter content for the entry</label>
                        <textarea  id = "content" name = "content" value = {this.state.dairyEntry.content}  placeholder = "How you feeling today ?" onChange = {this.changeHandler} required={true}/>    
                    </div>
                    <div className = "noteComposeButton" aria-label="submit button to save the  note entry">
                        <button type = "submit">
                            <FontAwesomeIcon icon = "plus-circle"/>
                        </button>               
                    </div>
                </form>
            </div>//End of <div className = "wrapper">
        );//End of return(
    }//End of render()
}

export default Compose;