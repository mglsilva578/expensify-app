//Export a stateless functional component
//description, amount, creatAt
import React from 'react';

import {removeExpense} from '../actions/expenses';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({dispatch, description, amount, createdAt, id})=>(
    <div>
        <Link to={`/edit/${id}`}>{description} </Link>
        <p > {amount} - {createdAt}</p>
        
    </div>
);

export default ExpenseListItem;




//ERRADO a class a cima ja recebe como props o state nao vale a pena repetir codigo
// const ExpenseListItem = (props) =>(
//     <div>
//         <h3></h3>
//         {props.expenses.map((expense)=>{
//             return(
//                 <p key={expense.id}> 
//                     {expense.description} 
//                     {expense.amount} 
//                     {expense.createdAt} </p>
//             );
//         })}
//     </div>

// );

// const mapStateToProps = (state)=>{
//     return{
//         expenses: state.expenses,
//         filters: state.filters
//     };
// };
// export default connect(mapStateToProps)(ExpenseListItem);