import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import TextField from 'material-ui/TextField';
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
} from 'material-ui/Table';
import  {service} from '../services/DhcpLeasesService';


export default class DhcpLeasesView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textf: null
        }
    }
    componentDidMount() {
        this.getLeasesData().then((response) =>{

            console.log("aasccc");
            console.log(response);
            }
        )
    }


    getLeasesData () {
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
        return (
            <Paper transitionEnabled={false} style={style2} zDepth={2}>
                <AppBar
                    title="Данные об арендах адресов DHCP"
                    style={{background: '#303F9F'}}
                    iconElementLeft={<IconButton
                        onClick={() =>{self.props.history.push('/');}}
                    >
                        <ChevronLeft />
                    </IconButton>
                    }
                />
                <TextField
                    floatingLabelText="Данные с сервера"
                    floatingLabelFixed={true}
                    value={self.state.textf}
                />
            </Paper>
        )
    }
}