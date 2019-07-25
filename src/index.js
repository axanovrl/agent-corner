import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input';
import './sign-up/Style.css'
import Label from './sign-up/Label';

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
                    <div className ="container-row">
                    <div className = "form-group col">
                    <label >First name</label>
                    <Input input = {this.input} />
                    </div>
                    <div className = "form-group col">
                    <label>Last name</label>  
                    <Input input = {this.input}/>
                    </div>
                  </div>
                    <div className = "label">
                    <label>Email address <Input input = {this.input}/></label>  
                    </div>
                      <div className = "label">
                      <label>Password<Input input = {this.input} type="password"/></label>   
                      </div>
                      <div className = "label">
                      <label>Confirm Password<Input input = {this.input} type="password"/></label> 
                      </div>
                    <strong><button>Sign Up</button></strong>
                    <p>Already have an account? <a href="#">Sign in instead</a></p>
                    <hr></hr>
                    <p>By continuing, you agree to our
                         <a href = "#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                        </p>
                       

                </form>
               
                
                </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
