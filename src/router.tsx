import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, browserHistory} from 'react-router-dom';
import Home from './home';
// import Rank from './rank';
// import QbankRank from './qbankRank';
// import MyQbank from './MyQbank';
// import Edit from './edit';
// import EditQuestion from './editQuestion';
// import User from './user';
// import Login from './login';
// import NoMatch from './noMatch';

const element =  document.getElementsByClassName('mod-app')[0];


ReactDOM.render(
    (<BrowserRouter>
        <div>
            <Route path="/index" component={Home}/>
        </div>
    </BrowserRouter>
),element);
