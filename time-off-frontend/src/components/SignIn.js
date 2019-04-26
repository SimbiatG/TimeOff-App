import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';

class SignIn extends Component{
     constructor(props){
        super(props);


            this.state = {
             
                    email: '',
                    emailError:''
                        

            };
                 
           
            
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);

}

componentDidMount(){
    const token = localStorage.getItem('user-token');
    if (token) return this.props.history.push('/dashboard');
}

handleChange(event){
    // const isCheckbox = event.target.type === "checkbox;"
    
    const typeOfInput  = event.target.type;
    this.setState({
        [event.target.name]: event.target.value
    });

    if(typeOfInput === "password") return;
    const isValid = this.validate(event.target.value);
   
    if (isValid){
        let error = ""
        event.target.nextSibling.innerHTML = error;
        
    }
    else{
        let error = "please enter a valid email"
        event.target.nextSibling.innerHTML = error;
        
    }

}

validate = (data) => {

    let emailExp = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
    if(!data.match(emailExp)){
        return false;
    }
    return true;
};


async handleSubmit(event) {
    
   event.preventDefault();

   try{
     const res = await axios.post("http://localhost:2019/users/signin", this.state);
     
     const token = res.data.data.token;

     localStorage.setItem('user-token', token);
     this.props.history.push('/dashboard')
       
       
   }catch(err){
       console.log('an error occured', err.response);
       
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

                <div className="bgpicture">
    
            <div className="container">
            <h3 className="heading"> Please Enter Your Login Details </h3>
            <div className="pageform">
                
                <form onSubmit={this.handleSubmit}>
    
      <div className="form-group ">
             <label htmlFor="email">Email:</label>
             <input type="email" className="form-control" required name="email"  value={this.state.email} onChange={this.handleChange.bind(this)} placeholder="Email Address"/>
             <div style={{color:"red"}}> {this.state.emailError} </div>
        </div>
        
        <div className="form-group">
             <label htmlFor="password"> Password:</label>
             <input type="password" className="form-control" name="password" required onChange={this.handleChange.bind(this)} placeholder="password"/>
            
        </div>
        

        {/* <button type="button" > SIGN IN </button> */}
        <button type="submit" className="btn btn-secondary btn-large signinbutton" to='/dashboard'>SIGN IN </button>
                </form>
            </div>
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



export default SignIn;