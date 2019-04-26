import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Dates from './components/Dates';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './Dashboard.css';
import axios from "axios";

  
class Dashboard extends Component{

  constructor(props){
    super(props);
      this.state = {
        isToggleOn:true,
        loading: true,
          employee: null


      };
      // this.state = {
      //   
      // }

      this.handleClick = this.handleClick.bind(this);
      this.logout = this.logout.bind(this);
      
  }

      async componentDidMount(){
        try{
          const token = localStorage.getItem('user-token');
          if (!token) return this.props.history.push('/');

       const res = await axios.get("http://localhost:2019/users/dashboard", {
         headers:{
           Authorization: `Bearer ${token}`,
         },
       });

        this.setState({loading: false, employee: res.data.data});
        }catch(err){
          this.props.history.push('/');
        }
      }

      logout(){
        localStorage.removeItem('user-token');
        this.props.history.push('/');
      }


  handleClick(){
    this.setState(function(prevState){
      return {isToggleOn: ! prevState.isToggleOn};
    });
  }

  Example = () => {
    return <DayPicker numberOfMonths={4} />;

  }

    render() {
        return(
                
<React.Fragment>

        <div className="container-fluid" style={{padding:"0px"}}>
        <nav className="navbar navbar-light bg-light" aria-label="breadcrumb">
            <span className="navbar-brand mb-0 h1">TimeOffManagement</span>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"> <Link to='/'> HOME </Link></li>
                    <li className="breadcrumb-item"> <Link to='/absenceform'> ABSENCE-FORM </Link></li>
                <li className="breadcrumb-item"> <Link to='/teamview'>TEAM-VIEW  </Link></li>
                <li className="breadcrumb-item">  <button type="submit" className="btn btn-secondary btn-large" onClick= {this.logout.bind(this)} > LOGOUT</button></li>
                </ol>
            </nav>
        </div>

        <div className="container">
           <div  className="headingtext">
                <h3> Employee Calendar </h3>
                <p> Arya Stark's calendar for 2019 </p>
        </div>
        </div>

        <div className="container">
            <div  className="headingtext">
                <h3 style={{color:"blue", marginTop:"40px"}}>  Statistics </h3> 
         <div className="row headingtext">
            <div className="col-md-3">
            <table className="table" >
            <tbody>
              <tr>
              <th scope="col"> <p className="number" style={{textAlign:"center"}}> 8.5 </p></th>
              </tr>
              </tbody>
              <tbody>
              <tr>
     
      <td><p style={{textAlign:"center"}}> days remaining out of 21 in Allowance </p></td>
      </tr>
              </tbody>
            </table>
               
            </div>

                    <div className="col-md-3">
                    <table className="table" >
                    <tbody>
              <tr>
              <th scope="col"> <h5 style={{textAlign:"center"}}> used so far </h5> </th>
              </tr>
              </tbody>
              <tbody>
              <tr>
     
      <td>  <p> Holiday : <span style={{float:"right"}}> 12.5 </span>  </p></td>
      </tr>
      <tr>
     
     <td>  <p> Sick Leave : <span style={{float:"right"}}> 1 out of 10 </span>  </p></td>
     </tr>
              </tbody>
            </table>
                    
               
                    </div>

                <div className="col-md-3">

                <table className="table" >
                <tbody>
              <tr>
              <th scope="col">  <h5 style={{textAlign:"center"}}>Available Types </h5> </th>
              </tr>
              </tbody>
              <tbody>
              <tr>
     
      <td>   <p> Holiday </p></td>
      </tr>
      <tr>
     
     <td>  <p> Maternity </p></td>
     </tr>
     <tr>
     
     <td>  <p> Paternity Leave </p></td>
     </tr>
     <tr>
     
    <td> <p> Sick Leave (up to 10 days) </p> </td>
     </tr>
              </tbody>
            </table>
              
             </div>

             <div className="col-md-3">

             <table className="table" >
             <tbody>
              <tr>
              <th scope="col">  <h5 style={{textAlign:"center"}}> Details </h5> </th>
              </tr>
              </tbody>
              <tbody>
              <tr>
     
      <td>   <p> Supervisor:  <span style={{float:"right", color:"blue"}}>  Arya Stark </span></p></td>
      </tr>
      <tr>
     
     <td> <p> Department: <span style={{float:"right", color:"blue"}}>  Sales </span></p></td>
     </tr>
     <tr>
     
     <td>  <p> Allowance in 2019: <span style={{float:"right"}}> 21 days </span></p></td>
     </tr>
     
              </tbody>
            </table>
            
             </div>
                </div>

            </div>
    </div>

                <div className="container">
                <h3 style={{color:"blue", marginTop:"40px"}}>  Calendar  </h3> 
                <h5 style={{textAlign:"center" , marginTop:"30px"}}> Upcoming Months  </h5>

                    <div className="row" style={{marginTop:"30px"}}>
                        <DayPicker numberOfMonths={4}/>
                      

                        
                    </div>
</div>
                
                <div className="container">
                <h3 style={{color:"blue", marginTop:"40px"}}> All Absences  </h3> 
                </div>
        <div className="container-fluid">
        <table className="table"  style={{marginTop:"30px"}} >
  <thead>
    <tr>
      <th scope="col">Type</th>
      <th scope="col">Deducted</th>
      <th scope="col">Dates</th>
      <th scope="col">Approved by</th>
      <th scope="col"></th>
      <th scope="col"> Status </th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td> Holiday </td>
      <td>7</td>
      <td> From 01-06-2019 to 12-06-2019 </td>
      <td> Cersei Lannister </td>
      <td><i className="fas fa-trash-alt"></i></td>
      <td> Approved</td>
    </tr>
    <tr>
    <td> Sick Leave </td>
      <td>0</td>
      <td>From 01-08-2019 to 12-08-2019</td>
      <td> Sansa Stark</td>
      <td><i className="fas fa-trash-alt"></i></td>
     <td>Approved</td>
    </tr>
    <tr>
    <td> Holiday </td>
      <td>7</td>
      <td> From 06-06-2019 to 12-06-2019 </td>
      <td> Cersei Lannister </td>
      <td><i className="fas fa-trash-alt"></i></td>
      <td> Approved</td>
    </tr>
    <tr>
    <td> Holiday </td>
      <td>7</td>
      <td> From 01-06-2019 to 12-06-2019 </td>
      <td> Cersei Lannister </td>
      <td><i className="fas fa-trash-alt"></i></td>
      <td> Approved</td>
    </tr>
    <tr>
    <td> Holiday </td>
      <td>0.5</td>
      <td> From 01-09-2019 to 12-09-2019 </td>
      <td> Little Finger </td>
      <td><i className="fas fa-trash-alt"></i></td>
      <td> Approved</td>
    </tr>
    <tr>
    <td> Holiday </td>
      <td>3 </td>
      <td> From 01-10-2019 to 12-10-2019 </td>
      <td> Jon Snow </td>
      <td><i className="fas fa-trash-alt"></i></td>
      <td> Approved</td>
    </tr>
  </tbody>
</table>     

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




export default Dashboard;