import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import Home from './components/home/Home';
import LogIn from './admin/Login';
import SignUp from './admin/Signup';
import SearchBar  from './admin/Search';

import "./App.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
export const App = () => (
<>    <BrowserRouter>
<Switch >
                <Route exact path="/" component={Home} />
                <Route exact path="/admin" component={LogIn} />
                 <Route exact path="/sign" component={SignUp} /> 
                 <Route exact path="/search" component={SearchBar} /> 



              </Switch>
              </BrowserRouter></>
);


export default App

