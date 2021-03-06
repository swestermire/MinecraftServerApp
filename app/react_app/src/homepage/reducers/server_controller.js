//todo: I think we need to address if flask app goes down by aws instance doesn't, meaning that a MC server might
// still be running upon restart of flask app.  Our initial state is wrong.
import {
    SET_PLAYERS_ONLINE,
    MC_SERVER_ON,
    MC_SERVER_PENDING,
    MC_SERVER_ERRORED
} from '../actions/server_controller';

const initState = {
    serverOn: false,
    serverErrored: false,
    serverPending: true,
    playersOnline: []
};

export default function(state=initState, action){
    switch(action.type){
        case MC_SERVER_ON:
            return {
                ...state,
                serverOn: action.payload
            };

        case MC_SERVER_PENDING:
            return {
                ...state,
                serverPending: action.payload
            };

        case MC_SERVER_ERRORED:
            return {
                ...state,
                serverErrored: action.payload
            };

        case SET_PLAYERS_ONLINE:
            return {
                ...state,
                playersOnline: action.payload
            };

        default:
            return state;
    }
}
