import 'babel-polyfill'
import React from 'react';

import ReactDOM from 'react-dom';
import {BrowserRouter, Route, IndexRoute, Switch} from 'react-router-dom';
import Desktop from './views/Desktop';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DhcpLeasesView from './views/DhcpLeasesView';

injectTapEventPlugin();
//ReactDOM.render(<AppRouter />, document.getElementById("App"));

ReactDOM.render(
    <MuiThemeProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Desktop}/>
                <Route path='/DhcpLeasesView' name="Аренда DHCP" component={DhcpLeasesView}/>

            </Switch>
        </BrowserRouter>
    </MuiThemeProvider>,
    document.getElementById('App')
);


