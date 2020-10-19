import React, { Component } from 'react';
//--------------------font awesome library imports------START------------------//
import firebase from './firebase';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faFeatherAlt,faTrashAlt,faExpandAlt,faPlusCircle,faMinusCircle,faCalendarMinus,faEdit,faTimesCircle} from '@fortawesome/free-solid-svg-icons';
//--------------------font awesome library imports------END-------------------//
//--------------------components  imports------START--------------------------//
import Header from './Header';
import Home from './Home';
import Compose from './Compose';
import Footer from'./Footer';
import Expand from './Expand';
import Filter from './Filter';
import NavButton from './NavButton';
//--------------------components  imports------END----------------------------//
//--------------------style sheet import--------START-------------------------//
import './App.css';
//--------------------style sheet import--------END---------------------------//

library.add(fab,faFeatherAlt,faTrashAlt,faExpandAlt,faPlusCircle,faMinusCircle,faCalendarMinus,faEdit,faTimesCircle);//font awesome library
class App extends Component {
  constructor(){
    super();
    this.state = {
      dairyData:[],
      filteredDairyData:[],
      showCompose:false,
      showHome:true,
      showExpand:false,
      recordInFocus:{},//stores record in focus on click of expand button
      recordCounter:0,//counter for prev and next button
      maxRecordOnPage:8// maximun number of records to be shown on home page
      //calledFromExpand:false
    }
  }//End of constructor()

  //-----------set state based on active tab called from Header Component-----------------------------------//
  setActiveTab = (activeTab) => {
    this.setState({
      showCompose:(activeTab === "compose"?true:false),
      showHome:(activeTab === "home"?true:false),
      showExpand:false,
      recordCounter:0,
    });  
  }//End of setActiveTab = (activeTab)

  //----------------push data to database on form submit by user called from Compose Component-----------------//
  submitHandler = (event,userInput) => {
    event.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push(userInput);
    this.setState({
      showCompose:false,
      showHome:true,
      showExpand:false,
      //calledFromExpand:false
    });
  }//End of submitHandler = (event,userInput)

  //----------------remove data to database on click of delete button called from Home Component---------------//
  //---------------key variable stores the database key of the record user perform delete action on -----------//
  deleteEntry =(key) => {
    const dbRef = firebase.database().ref();
    dbRef.child(key).remove();
    this.setState({
      showHome:true,
      showExpand:false
    });
  }

  //----------------expand record on click of expand button called from Home Component-------------------------//
  //---------------key variable stores the database key of the record user perform delete action on -----------//
  expandEntry = (key) =>{
    const copyDairyDate = [...this.state.dairyData]
    const recordInFocus = copyDairyDate.filter((data) => {
      return(data.key === key);
    });
    this.setState({
      showHome:false,
      showExpand:true,
      recordInFocus:recordInFocus[0]//get the first record with the filter criteria
    });
  }

  //-----------filter logic based on year,month and day selection by user called from Filter Component----------//
  //---------------------------userFilter is object contains user's filterselection----------------------------//
  filterData = (event,userFilter) => {
    event.preventDefault();
    const selectedOptionYear = userFilter.filter.year === 'year' ? 'all':'';
    const selectedOptionMonth = userFilter.filter.month === 'month' ? 'all':'';
    const selectedOptionDay = userFilter.filter.day === 'day' ? 'all':'';
    const copyDairyData = [...this.state.dairyData];
    let filterdairyData =[];
    if(selectedOptionYear === 'all' && selectedOptionMonth === 'all' && selectedOptionDay === 'all'){
      this.setState({
        filteredDairyData:copyDairyData,
        recordCounter:0
      });
    }else{
      filterdairyData = copyDairyData.filter((data) => {
        //return all the records if user hasn't selected year to filter
        return(selectedOptionYear === 'all' || (parseInt(new Date(data.dairyContent.date).getFullYear()) === parseInt(userFilter.filter.year)));
     }).filter((data) => {
        //return all the records if user hasn't selected month to filter
        return(selectedOptionMonth === 'all' || (parseInt(new Date(data.dairyContent.date).getMonth()+1) === parseInt(userFilter.filter.month)));
     }).filter((data) => {
        //return all the records if user hasn't selected day to filter
       return(selectedOptionDay === 'all' || (parseInt(new Date(data.dairyContent.date).getDate()+1) === parseInt(userFilter.filter.day)));
     });
     this.setState({
       filteredDairyData:filterdairyData//set filtered data from above in state to show on UI
     }); 
    }
  }

  //------------------------------update counter on click on pre or next button ------called from App component in render---//
  updateCounter = (event) => {
    let counter = this.state.recordCounter;
    if(event.target.name === 'prev' && counter >0){
      counter -= this.state.maxRecordOnPage;
    }else if(event.target.name === 'next' && ((counter + this.state.maxRecordOnPage) < this.state.filteredDairyData.length)){//to disable the next button id no records to show 
      counter += this.state.maxRecordOnPage;
    }
    this.setState({
      recordCounter:counter//update record counter in state
    });
  }

  //-------------------------get record set to display on prev or next button ------called from App component in render---//
  getNextRecords = (recordsSet) => {
    const endIndex   =  (this.state.filteredDairyData.length) > (this.state.recordCounter + this.state.maxRecordOnPage)? (this.state.recordCounter + this.state.maxRecordOnPage) : (this.state.filteredDairyData.length);
    return recordsSet.slice(this.state.recordCounter, endIndex);
  }
  
  //----------------close the expanded record on click of  button called from Expand Component---------------------//
  closeExpandedNote = () => {
    this.setState({
      showHome:true,
      showExpand:false
    });
  }

  //------------get firbase data and set in state on component loading--called from componentDidMount()--------//
  getDatabaseData = () => {
    const dbRef =  firebase.database().ref();
    dbRef.on('value',(response)=>{
      const dairyData = response.val();
      const dairyDataArray =[];
      for (const key in dairyData) {
        if (dairyData.hasOwnProperty(key)) {
          const element = dairyData[key]; 
          dairyDataArray.push({
            key:key,
            dairyContent:element
          });
        }
      }
      //------------set the data in state---------------------//
      this.setState({
        dairyData:dairyDataArray,
        filteredDairyData:dairyDataArray
      });
    }); 
  }
  //------------------------get databse data and store in state--------------------------------------------------//
  componentDidMount(){   
    this.getDatabaseData(); //get App data from firebase
  }//End of componentDidMount()

  //-------------------------------------------RENDER--------------------------------------------------------------//
  render(){
    //-------funtion return sliced array based on  number of records allowed to show on UI-------//
    const showFileterdDairyData = this.getNextRecords([...this.state.filteredDairyData]);
    return (
      <div className="App">
        <Header action={this.setActiveTab}/>
        <main>
        {/*------conditionally render home , filter component and prev and next button----START------------------*/}
        {this.state.showHome &&
        (         
          <section>
            <div className="wrapper">
              <div className ="homePageDiaryContent">
                {/*---------------conditionally render Filter component---START----- */}
                { this.state.dairyData.length > 0 && (
                  <Filter filterData = {this.filterData}/>
                )} 
                {/*---------------conditionally render Filter component---END----- */}

                {/*---------------conditionally render Filter Home---START--------- */}
                <div className="homePage">                         
                { showFileterdDairyData.map((data)=>{
                    return( 
                      <Home key = {data.key} displayContent = {data.dairyContent} deleteEntry={this.deleteEntry} id={data.key} expandEntry={this.expandEntry}/>
                    );
                  })             
                }
                </div>
                {/*---------------conditionally render Filter Home--------END---------- */}

                {/*---------------conditionally render prev and next buttons---START----- */}
                {this.state.filteredDairyData.length > this.state.maxRecordOnPage && (
                  <NavButton updateCounter = {this.updateCounter} startCounter = {this.state.recordCounter < 1} endCounter = {(this.state.recordCounter + this.state.maxRecordOnPage) > (this.state.filteredDairyData.length)}/>
                )}
                {/*---------------conditionally render prev and next buttons---END----- */}
              </div>
            </div>       
          </section>
          
        )}{/* End of  {this.state.showHome && */}   

        {/*-------------conditionally render comose component----START--------------*/}
        <section>
          <div className="composePage">
            {
              this.state.showCompose && (<Compose submitHandler = {this.submitHandler}/>)
            }
          </div>
        </section>
        {/*-------------conditionally render compose component----END-----------------*/}

        {/*-------------conditionally render expand component----START---------------*/}
        <section>
          <div className="expandPage">
            {
              this.state.showExpand && (<Expand recordInFocus={this.state.recordInFocus} closeExpandedNote={this.closeExpandedNote} deleteEntry={this.deleteEntry}/>)
            }
          </div>
        </section>
        {/*-------------conditionally render expand component----END-----------------*/}     
      </main> 
      <Footer/>
      </div>//End of <div className="App">
    );//End of return
  }//End of  render()
}//End of class App extends Component

export default App;
