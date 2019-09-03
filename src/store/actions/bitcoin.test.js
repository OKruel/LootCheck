//Imports from TO HANDLE ASYNCHRONOUS FETCH REQUEST TO AN API
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
//Imports from USER FILES
import * as action_types from './action_types'
import {fetchBitcoin} from '../actions/bitcoin'


const createMockStore = configureMockStore([thunk])
const store = createMockStore({ bitcoin: {} })
const mockResponse = {body: {bpi: 'bitcoin price index'}}

const call = fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mockResponse)

it('creates an async action to fetch bitcoin value' ,() => {
    const expectedAction = [{type: action_types.FETCH_BITCOIN, bitcoin: mockResponse.body}]

    return store.dispatch(call).then(() => {
        expect(store.getActions()).toEqual(expectedAction)
    })
})