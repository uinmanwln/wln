import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {Menu, MenuItem} from 'material-ui/Menu';
import ArrowDropRight from '@material-ui/icons/ArrowDropDown';
import PropTypes from 'prop-types';

export class Desktop_bck extends Component {
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
                <AppBar
                    title="Центр управления сетью WestLanNet"
                    style={{background: '#303F9F'}}
                />
                <Paper style={style} zDepth={3}>
                    <Menu desktop={true} width={320}>
                        <MenuItem primaryText="Настройка DHCP"
                                  rightIcon={<ArrowDropRight />}
                                  menuItems={[
                                      <MenuItem
                                          primaryText="Аренда DHCP"
                                          onClick={() => {
                                              this.props.history.push('/DhcpLeasesView');
                                          }}
                                      />,
                                      <MenuItem
                                          primaryText="Настройки адресов DHCP"
                                      />
                                  ]}
                        />
                        <MenuItem
                            primaryText="Настройка IPTV (мультикаст)"
                            rightIcon={<ArrowDropRight />}
                            menuItems={[
                                <MenuItem
                                    primaryText="Список каналов для Eltex"
                                />,
                                <MenuItem
                                    primaryText="Список каналов для Dune"
                                />,
                                <MenuItem
                                    primaryText="Список каналов для ПК"
                                />
                            ]}
                        />
                        <MenuItem
                            primaryText="Настройка IPTV (прокси)"
                            rightIcon={<ArrowDropRight />}
                            menuItems={[
                                <MenuItem
                                    primaryText="Список каналов для Eltex"
                                />,
                                <MenuItem
                                    primaryText="Список каналов для Dune"
                                />,
                                <MenuItem
                                    primaryText="Список каналов для ПК"
                                />
                            ]}
                        />
                    </Menu>
                </Paper>
            </Paper>

        )
    }
}
/*
Home.contextTypes = {
 router: PropTypes.object.isRequired
};*/

export default Desktop_bck