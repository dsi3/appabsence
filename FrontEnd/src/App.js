import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './components/home/Home';
import "./App.css"; 
export const App = () => (
<>    <BrowserRouter>
<Switch >
                <Route exact path="/" component={Home} />
              </Switch>
              </BrowserRouter></>
);
