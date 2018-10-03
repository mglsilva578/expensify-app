import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>DashBoard</NavLink>  
        <NavLink to="/create_expense" activeClassName="is-active"> Create_Expense</NavLink>  
        <NavLink to="/edit" activeClassName="is-active"> Edit</NavLink>
        <NavLink to="/help" activeClassName="is-active"> Help</NavLink>  
        <button onClick={startLogout}>LogOut</button>    
    </header>
);

const mapDispatchToProps = (dispatch)=> ({
    startLogout: ()=> dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);