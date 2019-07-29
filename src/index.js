import React from 'react';
import ReactDOM from 'react-dom';

import FieldForm from './components/FieldForm';
import './components/Style.css'


class App extends React.Component{

    render (){
        return(
            <div className="sign-up">
                <h2>Create your account</h2>
                <FieldForm/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
