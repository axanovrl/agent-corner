import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';


import FieldForm from './components/FieldForm';
import FieldFormLogin from './components/FieldFormLogin';
import FieldFormLForgotPassword from './components/FieldFormForgotPassword';
import './components/Style.css'


class App extends React.Component{

    render (){
        return (
                <BrowserRouter>
                    <div className="d-flex justify-content-center">
                        <Route path="/sign-up" component={FieldForm}/>
                        <Route path="/login" component={FieldFormLogin}/>
                        <Route path="/forgot-password" component={FieldFormLForgotPassword}/>
                    </div>
                </BrowserRouter>
              
           
          
            
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
