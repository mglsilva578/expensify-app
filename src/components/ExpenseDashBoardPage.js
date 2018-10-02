import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseDashBoardPage= () => (
    <div>
        <ExpenseListFilter/>
        <ExpenseList />
    </div>
);

export default ExpenseDashBoardPage;