import React from 'react';
import { Link } from 'react-router-dom';


export const Header = props => (
    <div>
        <h2>Loot Check</h2>
        <Link to='/'> Home </Link>
        <Link to='/wallet' style={{ padding: '5px' }}>
            Wallet
        </Link>
        <hr></hr>
    </div>
)



export default Header