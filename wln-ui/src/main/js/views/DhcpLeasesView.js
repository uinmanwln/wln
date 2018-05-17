import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {service} from '../services/DhcpLeasesService';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';




export default class DhcpLeasesView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textf: null,
            dhcpData: null
        }
    }

    componentDidMount() {
        /* this.getLeasesData().then((response) =>{

             console.log("aasccc");
             console.log(response);
             }
         )*/

        var dhcpdleases = require('dhcpd-leases');
        var bb = require('fs');

        var s = bb.readFileSync('C:\\Work\\dhcpd.leases', 'utf-8');
        var data = dhcpdleases(s);

        this.setState({dhcpData: data});

    }

    getLeasesData() {
        console.log("aaass");
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://127.0.0.1:8181/get", true);
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.send();


        console.log(xhr);
    }

    render() {
        const style2 = {
            height: '98vh',
            width: '100%',
            display: 'inline-block',
        };
        var self = this;
        var dhcpData = self.state.dhcpData;
        var moment = require('moment');
        return (
            <Paper transitionEnabled={false} style={style2} zDepth={2}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Данные об арендах адресов DHCP
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br/>
                <br/>
                {
                    dhcpData != null ?
                        <Table>
                            <TableHead>
                                <TableCell>IP адрес</TableCell>
                                <TableCell>MAC адрес</TableCell>
                                <TableCell>Дата начала аренды</TableCell>
                                <TableCell>Дата окончания аренды</TableCell>
                                <TableCell>Pon порт</TableCell>
                                <TableCell>Номер ONT</TableCell>
                            </TableHead>
                            <TableBody>
                                {self.state.dhcpData.map(record => {
                                    return (
                                        <TableRow key={record.ip}>
                                            <TableCell component="th" scope="row">
                                                {record.ip}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {record["hardware ethernet"]}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {moment(record.cltt).format("DD.MM.YYYY")}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {moment(record.ends).format("DD.MM.YYYY")}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {"0"}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {record["set rm"]}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })
                                }
                            </TableBody>
                        </Table>
                        : <div/>
                }
            </Paper>
        )
    }
}