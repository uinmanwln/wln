import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {Menu, MenuItem} from 'material-ui/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import ArrowDropRight from '@material-ui/icons/ArrowDropDown';
import PropTypes from 'prop-types';

export class Desktop extends Component {
    render() {
        console.log("aaaa");
        const style = {
            display: 'inline-block',
            margin: '16px 32px 16px 0',
        };
        const style2 = {
            height: '98vh',
            width: '100%',
            display: 'inline-block',
        };
        const aaa= {'min-width': '100%',
        'min-height': '100%',
        'position': 'relative'};

        return (

            <Paper   transitionEnabled={false} style={style2} zDepth={1}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Центр управления сетью WestLanNet
                        </Typography>
                    </Toolbar>
                </AppBar>

            </Paper>

        )
    }
}
/*
Home.contextTypes = {
 router: PropTypes.object.isRequired
};*/

export default Desktop