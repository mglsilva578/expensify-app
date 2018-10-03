import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';


const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  
  if (!hasRendered) {
    
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  
  if (user) {
    
    store.dispatch(login(user.uid));
    
    store.dispatch(startSetExpenses()).then(() => {
      if (history.location.pathname === '/') {
          history.push('/dashboard');
      }
      renderApp();
      
     
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

  
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