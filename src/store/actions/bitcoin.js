import * as action_types from './action_types'
import fetch from 'node-fetch'

export const fetchBitcoin = () => {
    return async dispatch => {
        return await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.json())
            .then(json => dispatch(
                {
                    type: action_types.FETCH_BITCOIN,
                    bitcoin: json.bpi.USD
                }
            ))
    }
}


