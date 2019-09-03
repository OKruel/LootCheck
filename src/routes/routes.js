//Imports from React
import React, { Component } from 'react'
//Imports from Routes
import { Router, Route, Switch } from 'react-router';
import history from './history'
//Imports from Components
import Wallet from '../components/wallet'
import Header from '../components/Header'
import Home from '../components/Home'

class Routes extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Header></Header>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/wallet' render={() => <Wallet />} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Routes