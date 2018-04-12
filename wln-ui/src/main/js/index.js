import 'babel-polyfill'
import React from 'react';

import ReactDOM from 'react-dom';
import {BrowserRouter, Route, IndexRoute, Switch} from 'react-router-dom';
import Home from './views/Home';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeasesDhcpView from './views/LeasesDhcpView';

injectTapEventPlugin();
//ReactDOM.render(<AppRouter />, document.getElementById("App"));

ReactDOM.render(
    <MuiThemeProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/admin' component={Home}/>
                <Route path='/LeasesDhcpView' name="Аренда DHCP" component={LeasesDhcpView}/>

            </Switch>
        </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById('App')
);


