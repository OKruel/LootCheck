//!Imports from React
import React, { Component } from 'react'
//!Imports from Redux and React-Redux
import { connect } from 'react-redux'

import * as ACTION from '../store/actions/balance'
import * as fetchBitcoinAction from '../store/actions/bitcoin'
import Loot from './Loot'

export class Wallet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            operation: 0
        }
    }

    componentDidMount() {
        this.props.fetchBitcoin()
    }

    updateBalance = event => {
        this.setState({
            operation: parseInt(event.target.value, 10)
        })
    }

    deposit = () => {
        return this.props.depositAction(this.state.operation)
    }

    render() {
        return (
            <div >
                {console.log('Props no render()', this.props)}
                <h2 >Wallet Deposit: {this.props.deposit}</h2>
                <h2> Wallet Withdrawal: {this.props.withdrawal} </h2>
                <h2 className='balance' >Wallet Balance: {this.props.balance}</h2>
                <hr></hr>
                <input className='input-wallet' type='text' onChange={event => this.updateBalance(event)} />
                <button className='btn-deposit' onClick={this.deposit}> Deposit </button>
                <button className='btn-withdraw' onClick={() => this.props.withdrawalAction(this.state.operation)}> Withdrawal </button>
                <p>Operation value: {this.state.operation}</p>
                <hr></hr>
                <Loot></Loot>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        depositAction: value => dispatch(ACTION.deposit(value)),
        withdrawalAction: value => dispatch(ACTION.withdrawal(value)),
        fetchBitcoin: () => {
            dispatch(fetchBitcoinAction.fetchBitcoin())
        }
    }
}


function mapStateToProps(state) {
    console.log('Map state to props', state)
    return {
        balance: state.balance.balance,
        deposit: state.balance.deposit,
        withdrawal: state.balance.withdrawal,
        bitcoin: state.bitcoin.bitcoin
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)