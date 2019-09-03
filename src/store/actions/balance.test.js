import * as action_types from './action_types'
import * as actions from './balance'

it('creates an action to set the balance', () => {
    const balance = 0
    const expectedAction = { type: action_types.SET_BALANCE, balance}

    expect(actions.setBalance(balance)).toEqual(expectedAction)
})

it('creats an action to deposit into balance', () => {
    const deposit = 100
    const expectedAction = {type: action_types.DEPOSIT, deposit}

    expect(actions.deposit(deposit)).toEqual(expectedAction)
})

it('creates an action to withdrawal from the balance', () => {
    const withdrawal = 50;
    const expectedAction = {type: action_types.WITHDRAWAL, withdrawal: withdrawal}

    expect(actions.withdrawal(withdrawal)).toEqual(expectedAction)
})