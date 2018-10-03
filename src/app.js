import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import {startSetExpenses} from './actions/expenses.js';
import {setTextFilter} from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import configureStore from './store/configureStore.js';
import AppRouter from './routers/AppRouter.js';
import './styles/styles.scss';
import {Provider} from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';


const store = configureStore();

// addExpense -> Water bill
// addExpense -> Gas bill
//set Textfilter -> Bill(2 items) -> water(1 item)
//get VisibleExpenses -> print visibles ones to screen

// store.dispatch(addExpense({description: 'Water Bill', amount: 4500}));
// store.dispatch(addExpense({description: 'Gas Bill', createdAt: 1000}));
// store.dispatch(addExpense({description: 'Water Bill', amount: 109600}));


// setTimeout(()=>{
//     store.dispatch(setTextFilter('rent'));
// }, 3000);

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
// console.log(store.getState());
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('app'));
});

