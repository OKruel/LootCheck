//Imports from React
import React from 'react'
//Imports from Enzyme
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'
//Imports from User Files
import { Wallet } from './wallet'

Enzyme.configure({ adapter: new Adapter() })

describe('Wallet Component', () => {
    const mockDeposit = jest.fn()
    const mockWithdrawal = jest.fn()
    const props = { balance: 20, depositAction: mockDeposit, withdrawalAction: mockWithdrawal}
    const wallet = shallow(<Wallet {...props} />)

    it('renders properly', () => {
        expect(wallet).toMatchSnapshot()
    })

    it('displays the balance State from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 20')
    })

    it('creates a input to deposit into or withdraw from the balance', () => {
        expect(wallet.find('.input-wallet').exists()).toBe(true)
    })

    describe('when user input a number', () => {
        const userBalance = '25'

        beforeEach(() => {
            wallet.find('.input-wallet')
                .simulate('change', { target: { value: userBalance } })
        })

        it('updates the local state wallet operation and converts into a number', () => {            
            expect(wallet.state().operation).toEqual(parseInt(userBalance, 10))
        })

        describe('user wants to deposit', () => {
            beforeEach(() => {
                wallet.find('.btn-deposit').simulate('click')
                wallet.find('.btn-withdraw').simulate('click')

            })

            it('dispatches the `deposit()` action from props with local state', () => {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10))
                expect(mockWithdrawal).toHaveBeenCalledWith(parseInt(userBalance, 10))
            })
        })
    })
})