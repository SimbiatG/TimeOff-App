import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import 'react-day-picker/lib/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Absenceform.css';


class Absenceform extends Component {

  //     constructor(props){
  //       super(props);
  //       this.state = {
  //         duration: 4
  //       };
  //     }

  // calculateDuration = (days) => {
  //   let not = undefined;
  //     let value = days
  //     let result = days
  //     let day , month, weeks
  //     if(value >= 30) {
  //       month = value / 30;
  //       month = Math.floor(month)
  //       value = value % 30
  //     }if (value >= 7) {
  //         day = value % 7;
  //         weeks = value / 7;
  //         weeks = Math.floor(weeks);
  //     } else {
  //       day = value
  //     }
  //     if(month !== not && (weeks === not && day === not) ) {
  //        result = `${month} Month`
  //     }
  //     if((month === not && day === 0) && weeks !== not ) {
  //        result = `${weeks} Week`
  //     }
  //     console.log(day)
  //     if(day !== not && (month === not && weeks ===not )) {
  //       result = `${day} day`
  //     }
  //     if(month !== not && weeks !== not && day !== not) {
  //       result = `${month} Month ${weeks} Week ${day} Day`
  //     }
  //       console.log(weeks)
  //     if(month !== not && weeks !== not && day === 0) {
  //       result = `${month} Month ${weeks} Week`
  //     }
  //     if(month !== not && weeks === not && day !== not ) {
  //       result = `${month} Month ${day} Day`
  //     }
  //     if (month === not && weeks && day) {
  //       result = `${weeks} Week ${day} Day`
  //     }
  //     console.log(result)
      
  //     return result
  // }

  // call  = (event) => {
  //   const { value, id } = event.target;
  //   // console.log(value)
  //   const dateNumber = new Date(value).getTime();
  //   this.setState({
  //     [id]: dateNumber
  //   })
  //   this.calc()
  // }

  // calc = () => {
  //   console.log(this.state)
  //   const {from, to} = this.state;
  //   // console.log(from)
  //   const oneDay = 24*60*60*1000;
  //   const num = to-from;
  //   var diffDays = Math.round(Math.abs(num) / oneDay );
  //   this.setState({
  //     duration: diffDays
  //   })
  
  
  // }
  // onChange={this.call}
  // value ={this.state.duration}

    render(){
  
        return(
            
    <React.Fragment>

<div className="container-fluid" style={{padding:"0px"}}>
                        <nav className="navbar navbar-light bg-light">
                            <span className="navbar-brand mb-0 h1">TimeOffManagement</span>
                                <form className="form-inline">
                                <Link className="btn btn-outline-success my-2 my-sm-0"  to='/'> HOME </Link>
                                <Link className="btn btn-outline-success my-2 my-sm-0" to='/dashboard' type="submit"> DASHBOARD </Link>
                                </form>
                        </nav>
                     </div>
                    

                     <div className="container">

                     <h3 className="header"> Please Fill The Absence Request Form </h3>

                     <div className="pagelayout">
                     <div class="input-group mb-3">
  <div className="input-group-prepend">
    <label className="input-group-text" for="inputGroupSelect01"> Type Of Leave</label>
  </div>
  <select className="custom-select" required id="inputGroupSelect01">
  <option selected></option>
    <option value="1"> Sick Leave </option>
    <option value="2">Maternity Leave </option>
    <option value="3">Paternity Leave</option>
    <option value="3"> Holiday Leave</option>
    </select>
</div>
<form>
                <div className="row">

                <div className="col-md-4">
                <div className="form-group">
    <label for="from"> FROM </label>
    <input type="date" required class="form-control" id="from"/>  
    
  </div>
                </div>

                <div className="col-md-4">
                <div className="form-group">
    <label for="to">TO </label>
    <input type="date" required class="form-control" id="to" />
    
  </div>
</div>

<div className="col-md-4">
<div className="form-group">
    <label for="formGroupExampleInput"> DURATION</label>
    <input type="text" class="form-control" id="formGroupExampleInput" />
  </div>
</div>

              </div>



                        
                        <div class="form-group">
    <label for="exampleFormControlTextarea1">  </label>
    <textarea class="form-control" required id="exampleFormControlTextarea1" placeholder="Reasons for Leave" rows="6"></textarea>
  </div>

  <button type="submit" className="btn btn-secondary btn-large "> Submit </button>
                        </form>

                     </div>


</div>



<div className="container-fluid"  style={{padding:"0px"}}>
            <nav className="navbar  fixed-bottom navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">TimeOffManagement</span>
            </nav>
            </div>




 </React.Fragment>











        )
    }
}


export default Absenceform;