import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header.js'
import AddExpensePage from '../components/AddExpensesPage'
import EditExpensePage from '../components/EditExpensePage.js'
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage'
import NotFoundPage from '../components/NotFoundPage.js'
import HelpPage from '../components/HelpPage.js'


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
            <Route path="/create_expense" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
   
    
</BrowserRouter>

);

export default AppRouter;