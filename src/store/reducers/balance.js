import * as action_type from '../actions/action_types'
import { read_cookie, bake_cookie } from 'sfcookies'

export const InitialState = {
    balance: 5,
    deposit: 0,
    withdrawal: 0
}

const balance = (state = InitialState, action) => {
    let balance = ''
    switch (action.type) {
        case action_type.SET_BALANCE:
            balance = {
                ...state,
                balance: action.balance
            }
            break;
        case action_type.DEPOSIT:
            balance = {
                ...state,
                balance: state.balance += action.deposit,
                deposit: action.deposit
            }
            break
        case action_type.WITHDRAWAL:
            balance = {
                ...state,
                withdrawal: action.withdrawal,
                balance: state.balance -= action.withdrawal
            }
            break
        default:
            balance = read_cookie(action_type.BALANCE_COOKIE) || state

    }
    bake_cookie(action_type.BALANCE_COOKIE, balance)
    
    return balance
}

export default balance