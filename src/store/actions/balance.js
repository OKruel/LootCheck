import * as action_types from './action_types'

export const setBalance = value => {
    return {
        type: action_types.SET_BALANCE,
        balance: value
    }
}

export const deposit = deposit => {
    return {
        type: action_types.DEPOSIT,
        deposit: deposit
        
    }
}

export const withdrawal = withdrawal => {
    return {
        type: action_types.WITHDRAWAL,
        withdrawal: withdrawal
    }
}