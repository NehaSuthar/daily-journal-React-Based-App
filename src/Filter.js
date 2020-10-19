//--------------Called from App.js.filters result as per user selection to show on UI-------------------//
import React, { Component } from 'react';
import moment from 'moment';

class Filter extends Component{

    constructor(){
        super();
        this.state ={
            year:'year',//year selected by user
            month:'month',//month selected by user
            day:'day'//day selected by user
        }
    }//End of  constructor()
    
    //-------------------------stores filter selected by user in state---------------------------------------//
    //-----State will be passed to App component to further filter the records--------------------------------//
    onChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    //---------reset filter to show all records on click of reset button---------------------------------------//
    resetSelection =(event) => {
        event.preventDefault();
        this.setState({
            year:'year',
            month:'month',
            day:'day'
        });
    }

    //-------------------------create array to show in year select option--------------------------------------//
    createYearArray(){
        const yearOption = [];
        const currentYear = new Date().getFullYear();
        for(let i=0;i<=10;i++){           
            yearOption.push(currentYear - i);
        }
        return yearOption;
    }

    //-------------------------create array to show in day select option ------------------------------------//
    createDayArray(numberOfDay){
        const dayArray =[];
        for(let i=1;i<=numberOfDay;i++){
            dayArray.push(i);
        }
        return dayArray;
    }
    
    render(){
        const yearOption    =   this.createYearArray();//year array for year selection filter
        const monthOption   =   moment.monthsShort();//month array for year selection filter
        const numberOfDays  =   new Date(this.state.year, this.state.month, 0).getDate();//get number of days in selected year and month
        const dayOption     =   this.createDayArray(numberOfDays);//day array for year selection filter
        return(
            <div className="homePageFilterFormContainer">
                <form className = "dateFilterForm">
                    <div className="filterOptionContainer">
                        <div className  = "filterYearSelection">
                            <select onChange = {this.onChange} value={this.state.year} name="year">
                                <option value = "year">year</option>
                                {
                                    yearOption.map((year,index)=>{
                                        return(
                                            <option key = {index} value = {year}>
                                                {year}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className = "filterMonthSelection">
                            <select onChange = {this.onChange}  value = {this.state.month} name = "month">
                                <option value = "month">month</option>
                                {
                                    monthOption.map((month,index) => {
                                        return(
                                            <option key = {index} value = {index+1}>
                                                {month}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className = "filterDaySelection">
                            <select onChange = {this.onChange} value = {this.state.day} name = "day">
                                <option value = "day">day</option>
                                {
                                    dayOption.map((day,index) => {
                                        return(
                                            <option key = {index} value = {index+1}>
                                                {day}
                                            </option>
                                        )
                                    })
                                }                           
                            </select>
                        </div>
                    </div> 
                    <div className = "filterButtonContainer">
                        <div className="filterButton">
                            <button onClick = {(event) => {this.props.filterData(event,{filter:{...this.state}})}}>
                                Go
                            </button>
                        </div>
                        <div className="resetButton">
                            <button onClick = {(event) => {this.resetSelection(event);this.props.filterData(event,{filter:{year:'year',month:'month',day:'day'}})}}>
                                reset
                            </button>
                        </div>
                    </div>          
                </form>
            </div>
        );//End of return
    }//End of  render()
}

export default Filter;