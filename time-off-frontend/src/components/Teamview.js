import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Teamview.css';


class Teamview extends Component{
    render() {
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
           <div  className="headtext">
                <h3> Taylor Swift messages </h3>
               
        </div>
        </div>

        <div className="container">
          
                <p style={{color:"blue" , marginTop:"40px"}}> Leave request to approve </p>
         
        </div>
        
        <div className="container-fluid">
        <table className="table"  style={{marginTop:"30px"}} >
  <thead>
    <tr>
      <th scope="col"> Employee </th>
      <th scope="col">Department </th>
      <th scope="col">Date of Request</th>
      <th scope="col"> Leave dates </th>
      <th scope="col"> Type </th>
      <th scope="col"> Days </th>
      <th scope="col"> </th>
      <th scope="col"> </th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
    <td> Halle Berry </td>
      <td> Warehouse </td>
      <td> 01-06-2019 </td>
      <td>From 01-08-2019 to 12-08-2019 </td>
      <td> Maternity Leave </td>
      <td> 14</td>
      <th scope="col"><button type="submit" className="btn btn-warning btn-large" > Approve</button> </th>
      <th scope="col"><button type="submit" className="btn btn-danger btn-large" > Reject </button></th>
    </tr>
    <tr>
    <td> Kiera Knight </td>
      <td> Housing </td>
      <td>12-08-2019</td>
      <td> From 01-08-2019 to 12-08-2019</td>
      <td> Holiday </td>
      <td> 4</td>
      <th scope="col"><button type="submit" className="btn btn-warning btn-large" > Approve</button> </th>
      <th scope="col"><button type="submit" className="btn btn-danger btn-large" > Reject </button></th>
    </tr>
    <tr>
    <td> Jon Snow </td>
      <td> Warehouse</td>
      <td> 12-06-2019 </td>
      <td> From 06-06-2019 to 12-06-2019 </td>
      <td> Holiday</td>
      <td> 4</td>
      <th scope="col"><button type="submit" className="btn btn-warning btn-large" > Approve</button> </th>
      <th scope="col"><button type="submit" className="btn btn-danger btn-large" > Reject </button></th>
    </tr>
    <tr>
    <td>  Cersei Lannister  </td>
      <td> Sales </td>
      <td> 01-06-2019 </td>
      <td>  From 01-06-2019 to 12-06-2019</td>
      <td> Holiday </td>
      <td> 6 </td>
      <th scope="col"><button type="submit" className="btn btn-warning btn-large" > Approve</button> </th>
      <th scope="col"><button type="submit" className="btn btn-danger btn-large" > Reject </button></th>
    </tr>
    <tr>
    <td> Jane Doe </td>
      <td> Warehouse</td>
      <td>12-09-2019 </td>
      <td> From 01-09-2019 to 12-09-2019 </td>
      <td> Sick Leave</td>
      <td> 3 </td>
      <th scope="col"><button type="submit" className="btn btn-warning btn-large" > Approve</button> </th>
      <th scope="col"><button type="submit" className="btn btn-danger btn-large" > Reject </button></th>
    </tr>
    <tr>
    <td> Bruno Mars </td>
      <td> Marketing </td>
      <td> 01-10-2019</td>
      <td> From 01-10-2019 to 12-10-2019 </td>
      <td>Holiday</td>
      <td> 7 </td>
      <th scope="col"><button type="submit" className="btn btn-warning btn-large" > Approve</button> </th>
      <th scope="col"><button type="submit" className="btn btn-danger btn-large" > Reject </button></th>
    </tr>
  </tbody>
</table>     

        </div>


        <div className="container">
          
          <p style={{color:"blue" , marginTop:"40px"}}> All Leaves </p>
   
  </div>

   
  <div className="container-fluid">
        <table className="table"  style={{marginTop:"30px"}} >
  <thead>
    <tr>
      <th scope="col"> Type </th>
      <th scope="col">Deducted </th>
      <th scope="col">Dates</th>
      <th scope="col">Approved By </th>
      <th scope="col"> Status </th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
    <td> Holiday </td>
      <td>7</td>
      <td>From 01-08-2019 to 12-08-2019 </td>
      <td>  Meghan Markle </td>
      <td> Approved </td>
    </tr>
    <tr>
    <td> Sick Leave </td>
      <td>5</td>
      <td>From 01-08-2019 to 12-08-2019 </td>
      <td>  Meghan Markle </td>
      <td> Approved </td>
    </tr>
    <tr>
    <td> Holiday </td>
      <td>10</td>
      <td>From 01-08-2019 to 12-08-2019 </td>
      <td>  Meghan Markle </td>
      <td> Pending </td>
    </tr>
    <tr>
    <td> Maternity Leave </td>
      <td>27</td>
      <td>From 01-08-2019 to 12-08-2019 </td>
      <td>  Meghan Markle </td>
      <td> Approved </td>
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


export default Teamview;
