import * as action_type from '../actions/action_types'
import { read_cookie, bake_cookie } from 'sfcookies'

const InitialState = {
    balance: read_cookie('balance').balance || 5,
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
            };
            break;
        case action_type.DEPOSIT:
            balance = {
                ...state,
                balance: state.balance += action.deposit,
                deposit: action.deposit
            };
            bake_cookie('balance', balance);
            break;
        case action_type.WITHDRAWAL:
            balance = {
                ...state,
                withdrawal: action.withdrawal,
                balance: state.balance -= action.withdrawal
            };
            bake_cookie('balance', balance);
            break;
        default:
            balance = state || read_cookie('balance');
    }
    read_cookie('balance').balance || bake_cookie('balance', balance);
    return balance;
}

export default balance