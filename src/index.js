import React from 'react';
import ReactDOM from 'react-dom';

import FieldInput from './components/FieldInput';
import FieldForm from './components/FieldForm';
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
                <h2>Create your account</h2>
                    <FieldForm />  
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
