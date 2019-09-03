import React from 'react'
//! Imports from ENZYME
import Enzyme from 'enzyme'
import adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'
//! Imports from ROUTES AND REACT-ROUTER
import { Route } from 'react-router'
import Routes from './routes'

Enzyme.configure({ adapter: new adapter() })

describe('Routes Component', () => {
    const props = history = { history }
    const routes = shallow(<Routes {...props} />)
    const pathWallet = shallow(<Route path='/wallet' render={() => <Wallet />} />)

    it('renders properly', () => {
        // console.log(routes.debug())
        expect(routes).toMatchSnapshot()
        expect(pathWallet).toMatchSnapshot()
    })

    it('contains Router component', () => {
        expect(routes.find('Router').exists()).toBe(true)
    })

    it('contains Header component', () => {
        expect(routes.find('Header').exists()).toBe(true)
    })

    it('contains Switch component', () => {
        expect(routes.find('Switch').exists()).toBe(true)
    })

    it('contains Route component', () => {
        expect(routes.find('Route').exists()).toBe(true)
    })

    // it('contains Wallet component', () => {
    //     expect(pathWallet.find('Wallet').exists()).toBe(true)
    // })

    // it('contains a connected Loot component', () => {
    //     expect(app.find('Connect(Loot)').exists()).toBe(true)
    // })

})