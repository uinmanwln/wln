import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';


export default class DhcpLeasesView extends Component {
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
            </Paper>
        )
    }
}