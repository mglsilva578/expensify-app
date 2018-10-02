import {createStore} from 'redux';


const incrementCount = ({incrementBy = 1} = {}) =>({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

//Reducers
//1. Reducers are pure function
//2. Never change state or action

const countReducer = (state = {count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            const decrement = typeof action.decrementBy === 'number'? action.decrementBy:1;
            return{
                count: state.count - decrement
            };
        case 'RESET':
            return{
                count: 0
            };
        default:
            return state;
    }
    
};


const store = createStore(countReducer);
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

//Actions - that an object that gets sent to the store

//increment, decrement , reset
store.dispatch(incrementCount()
);

store.dispatch(incrementCount({incrementBy: 10}));

// unsubscribe();

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'DECREMENT',
});


store.dispatch({
    type: 'RESET'
});



