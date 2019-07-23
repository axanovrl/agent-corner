import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import Label from ''

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
            <div>
                <h1>What's your name? </h1>
                <Input handleChange = {this.handleChange}/>
                <Label name = {this.state.name}/>
                </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));