import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


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
                                <ListItem button  onClick={() =>{this.props.history.push('/DhcpLeasesView')}}>
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