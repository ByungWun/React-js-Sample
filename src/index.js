import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux'; //단일 멤버를 import할 경우엔 중괄호로 처리
import {Provider} from 'react-redux';

import reducers from './reducers';

const store = createStore(reducers);
console.log(store);
console.log(store.getState());
console.log(store.subscribe(function(_event){
    console.log(_event);
}))


ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

//index.js로 처음 진입한다
