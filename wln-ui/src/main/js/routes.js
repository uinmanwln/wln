import React from 'react';
import {
    Router,
    IndexRoute,
    Route,
    browserHistory
} from 'react-router';

import Home from './views/Desktop';
import LeasesDhcpView from './views/DhcpLeasesView';

export default () => (
    <Router history={browserHistory}>
        <Route path='/' name="Рабочий стол App" component={Home} />
        <Route path='/LeasesDhcpView' name="Аренда DHCP" component={LeasesDhcpView} />
        <Router path='*' component={NotFound}/>
    </Router>
);
