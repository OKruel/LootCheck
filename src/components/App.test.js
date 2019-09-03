//! Imports from React
import React from 'react'
//! Imports from Enzyme
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'
//! Imports from Main Files
import App from './App'

Enzyme.configure({ adapter: new Adapter() })

const app = shallow(<App />)

describe('App', () => {
    it('renders propely', () => {
        expect(App).toMatchSnapshot()
    })

    it('contains a Routes component', () => {
        // console.log(app.debug())
        expect(app.find('Routes').exists()).toBe(true)
    })

    it('contains a link to the coindesk price page', () => {
        expect(app.find('a').props().href).toBe('https://www.coindesk.com/price')
    })


})
