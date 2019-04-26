import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';



class SignUp extends Component{
    constructor(props){
        super(props);

            this.state = {
                  fname: '',
                    lname:'',
                    mname:'',
                    dob:'',
                    age:'',
             email:'',
                     password: '',
                     lnameError:'',
                     fnameError:'',
                     mnameError:'',
                       
            };

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);

}


handleChange(event){
    // const isCheckbox = event.target.type === "checkbox;"
    const typeOfInput  = event.target.type;
    this.setState({
        [event.target.name]: event.target.value
    });
    
    if(typeOfInput === "email" || typeOfInput === "number" || typeOfInput === "password" || typeOfInput === "date") return;

    const isValid = this.validate(event.target.value);
    if (isValid){
        let error = ""
        event.target.nextSibling.innerHTML = error ;
        
    }
    else{
        let error = "please use alphabets only";
        event.target.nextSibling.innerHTML = error ;
    }

}

validate = (data) => {

    var nameExp = /^[a-zA-Z]+$/;
    if(!data.match(nameExp)){
        return false;
    }
    return true;
};



 async handleSubmit(event) {
    
    event.preventDefault();

    try{
      const res = await axios.post("http://localhost:2019/users/", this.state);
      console.log(res.data);
      const token = res.data.data.token;

      localStorage.setItem('user-token', token);
      this.props.history.push('/dashboard')
        
        
    }catch(err){
        console.log('an error occured', err);
        
    }

   
   
}; 

render() {
        return(
<React.Fragment>
                   <div className="container-fluid" style={{padding:"0px"}}>
                        <nav className="navbar navbar-light bg-light">
                            <span className="navbar-brand mb-0 h1">TimeOffManagement</span>
                                <form className="form-inline">
                                <Link className="btn btn-outline-success my-2 my-sm-0"  to='/'> HOME </Link>
                                </form>
                        </nav>
                     </div>
<div className="container">
    <div className="row">
            <div className="col-md-5">
                <h3 className="heading"> TimeOff Management </h3>
               
                        <div className="imagewrapper">
                            
                        </div>
            </div>

                <div className="col-md-7">
                    
                        <h3 className="heading"> Employee Details </h3>
                    
                    <div className="formpart">
            <form  onSubmit={this.handleSubmit} className="formstyle">
                <div className="form-group ">
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text"  required className="form-control"name="fname"  value= {this.state.fname} onChange= {this.handleChange.bind(this)}/>
                    <div style={{color:"red"}}> {this.state.fnameError} </div>
                </div>
        <div className="form-group">
             <label htmlFor="lastname">Last Name:</label>
             <input type="text" className="form-control" name="lname" value= {this.state.lname} onChange= {this.handleChange.bind(this)} required/>
             <div style={{color:"red"}}> {this.state.lnameError} </div>
        </div>
    
        <div className="form-group ">
             <label htmlFor="managersname">Manager's Name:</label>
             <input type="text" className="form-control" name="mname" value= {this.state.mname} onChange= {this.handleChange.bind(this)} required/>
             <div style={{color:"red"}}> {this.state.mnameError} </div>
             </div>
       
        <div className="form-group ">
             <label htmlFor="age"> Age:</label>
             <input type="number" className="form-control" name="age" value= {this.state.age} onChange= {this.handleChange.bind(this)} required/>
        </div>
        <div className="form-group ">
             <label htmlFor="dob">D.O.B:</label>
             <input type="date" className="form-control" name="dob" value= {this.state.dob} onChange= {this.handleChange.bind(this)} required/>
        </div>
        <div className="form-group ">
             <label htmlFor="email">Email</label>
             <input type="email"  className="form-control" name="email" value= {this.state.mail} onChange= {this.handleChange.bind(this)} required/>
        </div>
        <div className="form-group">
             <label htmlFor="password"> Password:</label>
             <input type="password" className="form-control"  required name="password" value= {this.state.password} onChange= {this.handleChange.bind(this)}/>
        </div>
       
        <button type="submit" className="btn btn-secondary btn-large" >Create</button>

</form> 
                               
</div>
                </div>
                   
               </div>
                
            </div>
                    <div className="container-fluid">
            <nav className="navbar fixed-bottom navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">TimeOffManagement</span>
            </nav>
            </div>
</React.Fragment>
        );
    }
    
}


export default SignUp;