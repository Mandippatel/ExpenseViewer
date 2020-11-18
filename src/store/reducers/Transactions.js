import { ADD_TRANSACTION, DELETE_TRANSACTION } from "../actions/types"
const initialstate = {
    
    transactions : [
        {id:1,title:'Soup',price:-20},
        {id:2,title:'ColdDrink',price:-10},
        {id:3,title:'Texi',price:500},
        {id:4,title:'Rech',price:-20},
        {id:5,title:'bank',price:5000},
        {id:6,title:'Shops',price:-20},
    ]
};

export default (state = initialstate , {type,payload}) =>{
    switch (type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [payload,...state.transactions],
            }
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction.id !== payload,
                ),
            };
        default:
            return state;
    }
}