import React from 'react';
import ReactDOM from 'react-dom';
import Input from './sign-up/Input';
import Label from './sign-up/Label'
import './sign-up/Style.css'
class App extends React.Component{

    constructor (props) {
        super(props);
        this.state = {name: " "}
    }

    handleChange = (e) => {
        this.setState({name: e.target.value});
    }

    render() {
        return(
            <div className = "sign-up">
                <h1>Create your account</h1>
                <form>
                    <div className ="container">
                    <strong >First name<input className ="name" ></input></strong>
                    <strong >Last name<input className ="name" ></input></strong>  
                    </div>
                    <strong>Email address <input className ="label"></input></strong>    
                    <strong>Password<input className ="label" type ="password"></input></strong>   
                    <strong>Confirm Password<input className = "label" type ="password"></input></strong>  
                    <strong><button>Sign Up</button></strong>
                    <p id ="account">Already have an account? <a href="#">Sign in instead</a></p>
                    <hr></hr>
                    <p>By continuing, you agree to our <a href = "#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
                </form>
               
                
                </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));