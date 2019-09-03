import balanceReducer from './balance'
import balanceReducer2 from './balance'
import * as action_type from '../actions/action_types'

describe('balanceReducer', () => {

    describe('when initializing', () => {
        const balance = 5
        const deposit = 0
        const withdrawal = 0
        
        it('sets a Balance State', () => {
            expect(balanceReducer(undefined, {
                type: action_type.SET_BALANCE,
                balance: balance
            }
            ))
        })

        describe('then re-initializing', () => {
            it('reads balance from cookies', () => {
                expect(balanceReducer2(undefined, {})).toEqual({balance, deposit, withdrawal})
            })
        })

    })


    it('deposits into the balance', () => {
        let deposit = 100
        let InitialState = {
            balance: 5,
            deposit: 0
        }
        expect(balanceReducer(InitialState, { type: action_type.DEPOSIT, deposit }))
            .toEqual(
                InitialState = {
                    balance: InitialState.balance,
                    deposit: deposit
                }
            )
        // console.log(InitialState.balance)
    })

    it('withdrawal from the balance', () => {
        let withdrawal = 50;
        let InitialState = {
            balance: 100,
            withdrawal: 50,

        }
        expect(balanceReducer(InitialState, { type: action_type.WITHDRAWAL, withdrawal }))
            .toEqual(
                InitialState = {
                    balance: InitialState.balance,
                    withdrawal: withdrawal
                }
            )
    })
})