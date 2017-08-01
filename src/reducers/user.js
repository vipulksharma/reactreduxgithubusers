/**
 * Created by vipulkumarsharma on 25/07/17.
 */



const user = (state = {}, action) => {
    const { type, users, start , userData, payload, todos} = action;

    switch(type){
        case 'USER_DATA_RECIEVED':
            return {...state, "users" : users, "start" : start + 1};
        case 'INDIVIDUAL_USER_DATA_RECIEVED':
            console.log('in here', action);
            return {...state, "userData" : userData}
        case 'SET_TODO': {
            return {...state, "todos": todos}
        }
        default:
            return state;
    }
};

export default user;