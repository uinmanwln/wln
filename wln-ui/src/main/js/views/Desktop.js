import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {Menu, MenuList, MenuItem} from 'material-ui/Menu';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowDropRight from '@material-ui/icons/ArrowDropDown';
import PropTypes from 'prop-types';

export class Desktop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenDhcp: false,
            isOpenIptvM: false,
            isOpenIptv: false
        }
    }

    clickDhcp() {
        console.log("ssss");

        this.setState({ isOpenDhcp: !this.state.isOpenDhcp });
    };

    clickIptvM() {
        this.setState({ isOpenIptvM: !this.state.isOpenIptvM });
    };

    clickIptv() {
        this.setState({ isOpenIptv: !this.state.isOpenIptv });
    };
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
        const aaa = {
            'min-width': '100%',
            'min-height': '100%',
            'position': 'relative'
        };
        console.log(this.state.isOpenDhcp);
        return (

            <Paper transitionEnabled={false} style={style2} zDepth={1}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Центр управления сетью WestLanNet
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Paper style={style} zDepth={3}>
                    <List component="nav">
                        <ListItem button onClick={this.clickDhcp.bind(this)}>
                            <ListItemText primary="Настройка DHCP"/>
                            {this.state.isOpenDhcp ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.isOpenDhcp} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button >
                                    <ListItemText inset primary="Аренда DHCP" />
                                </ListItem>
                                <ListItem button>
                                <ListItemText inset primary="Настройки адресов DHCP" />
                            </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button onClick={this.clickIptvM.bind(this)}>
                            <ListItemText primary="Настройка IPTV (мультикаст)    "/>
                            {this.state.isOpenIptvM ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.isOpenIptvM} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button >
                                    <ListItemText inset primary="Список каналов для Eltex" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText inset primary="Список каналов для Dune" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText inset primary="Список каналов для ПК" />
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button onClick={this.clickIptv.bind(this)}>
                            <ListItemText primary="Настройка IPTV (прокси)"/>
                            {this.state.isOpenIptv ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state.isOpenIptv} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button >
                                    <ListItemText inset primary="Список каналов для Eltex" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText inset primary="Список каналов для Dune" />
                                </ListItem>
                                <ListItem button>
                                    <ListItemText inset primary="Список каналов для ПК" />
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </Paper>

            </Paper>

        )
    }
}

/*
Home.contextTypes = {
 router: PropTypes.object.isRequired
};*/

export default Desktop