import React, { Component } from 'react';
import { connect } from 'react-redux';

//todo: Have shareable component for Server card status
import { Card, CardActions, CardHeader, CardTitle } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import { turnOnServerSagas } from '../sagas/server_controller';
import { TURN_ON_MC_SERVER, TURN_OFF_MC_SERVER } from '../sagas/server_controller';

class Homepage extends Component {
    constructor(props){
        super(props)
        console.log('Homepage props are ', this.props.serverStatus)

        this.onMinecraftServerToggle = this.onMinecraftServerToggle.bind(this)
        this.toggled = false;
        this.toggleStyle = {
            trackStyle: {color: 'red'}
        }
    }

    onMinecraftServerToggle(){
        let request = this.props.turnOnServer();
        console.log('new props are', this.props)
    }

    render(){
        return (
            <Card>
                <CardHeader
                    title="Minecraft Server Status"
                />

                <CardActions>
                    // todo: need to update check mark for when server is on... or change it out right. Looks kindof ugly.
                    <div>
                        Server Status On: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z"/></svg>

                    </div>
                    <Toggle
                        label="Turn On Server"
                        onToggle={this.onMinecraftServerToggle}
                        trackSwitchedStyle={this.toggleStyle.trackStyle}
                        toggled={this.props.serverOn}
                    />
                </CardActions>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        serverStatus: state.serverStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        turnOnServer: () => {
            dispatch({type: TURN_ON_MC_SERVER})
        },
        turnOffServer: () => {
            dispatch({type: TURN_OFF_MC_SERVER})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
