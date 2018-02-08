import React, { Component } from 'react';

import Display from './display'
import LoginForm from './loginForm'

class App extends Component{
    render(){
        return (
            <div className="App">
                <Display />
                <LoginForm />
            </div>
        );
    }
}

export default App; //간편하게 import할 수 있는 별명 같은 것 

// constructor -> componentWillMount -> render (컴포넌트 생성) -> componentDidMount (완료)