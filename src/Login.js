import React, {Component} from 'react';
import fire from './config/fire';
import './login.css'
class Login extends Component{
constructor(props)
{
    super(props)
    this.login=this.login.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.signup=this.signup.bind(this);
    this.state={
        email:"",
        password:"",
    }

}  
login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then ((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}

signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then ((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err)
    })
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}


render() {
        return(
            <div className="container">
                 

                <form>
                    <div className="login">
                        <div className="content">
                        <h1>Welcome </h1>
                    <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                    value={this.state.email} 
                    className="email"
                     />
                    <input 
                    name="password"
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                    placeholder="Password"
                    value={this.state.password}
                    className="password"

                    /> 
                    <div className="btn2">
                    <div className="btn">
                    <button onClick={this.login} className="button1">Login</button>
                    <button onClick={this.signup} className="button2">Signup</button>
                    </div>
                    </div>
                    </div>
                    <h6 className="h6">All rights reserved by Tanush yadav</h6>

                    </div>

                </form>
            </div>

        )
    }
}
export default Login;