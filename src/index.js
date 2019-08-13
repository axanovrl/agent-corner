import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';


import FieldSignUp from './pages/SignUp/index';
import FieldLogin from './pages/Login/index';
import FieldForgotPassword from './pages/ForgotPassword/index'
import Contacts from './pages/Contacts/index';
import Details from './pages/Details/index';
import Settings from './pages/Settings/index';
import Campaigns from './pages/Campaigns/index';
import Style from './assets/style/Style.css';


class App extends React.Component{

    render (){
        return (
                <BrowserRouter>
                    <div className="d-flex justify-content-center">
                        <Route path="/sign-up" component={FieldSignUp}/>
                        <Route path="/login" component={FieldLogin}/>
                        <Route path="/forgot-password" component={FieldForgotPassword}/>
                        
                    </div>
                    <Route path="/contacts" component={Contacts} exact={true}/>
                    <Route path="/contacts:id" component={Details} exact={true}/>
                    <Route path="/details" component={Details}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/campaigns" component={Campaigns}/>
                
                    
                </BrowserRouter>
              
           
          
            
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
