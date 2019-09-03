import rootReducer from './index'
import balance from './balance'
import bitcoin from './bitcoin'

describe('rootReducer', () => {
    it('Initializes the default state of the Reducers', () => {
        expect(rootReducer({}, {})).toEqual({balance, bitcoin})
    })
})