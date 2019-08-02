import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';


import SignUp from './components/SignUp';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Contacts from './components/Contacts';
import Details from './components/Details';
import './components/Style.css'


class App extends React.Component{

    render (){
        return (
                <BrowserRouter>
                    <div className="d-flex justify-content-center">
                        <Route path="/sign-up" component={SignUp}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/forgot-password" component={ForgotPassword}/>
                        
                    </div>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/details" component={Details}/>
                    
                </BrowserRouter>
              
           
          
            
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
