import * as action_types from '../actions/action_types'

const initialState = {
    bitcoin: ''
}

const bitcoin = (state = initialState, action) => {
    switch (action.type) {
        case action_types.FETCH_BITCOIN:
            return action.bitcoin
        default:
            return state;
    }
}

export default bitcoin