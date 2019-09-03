import React from 'react'
//Imports from ENZYME
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { mount, shallow } from 'enzyme'
//Imports from USERS FILES
import { Loot } from './Loot'

Enzyme.configure({ adapter: new Adapter() })


describe('Loot Component', () => {
    const mockFetchBitcoin = jest.fn()
    const props = {balance: 0, bitcoin: {}, fetchBitcoin: }
    let loot = shallow(<Loot {...props}/>)

    it('renders properly', () => {
        expect(loot).toMatchSnapshot()
    })

    describe('when mounted', () => {
        beforeEach(() => {
            props.fetchBitcoin = mockFetchBitcoin
            loot = mount(<Loot {...props}/>)
        })

        it('dispathes the `fetchBitcoin method receives from props`', () => {
            expect(mockFetchBitcoin).toHaveBeenCalled()
        })
    })

    describe('when there are valid bitcoin props', () => {
        beforeEach(() => {
            props = {balance: 10, bitcoin: {USD:{rate: '1,000'}}}
            loot = shallow(<Loot {...props}/> )
        })

        it('displays the correct bitcoin value', () => {
            expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01')
        })
    })

})