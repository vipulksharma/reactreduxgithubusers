/**
 * Created by vipulkumarsharma on 25/07/17.
 */



const user = (state = {}, action) => {
    const { type, users, start , userData} = action;

    switch(type){
        case 'USER_DATA_RECIEVED':
            return {...state, "users" : users, "start" : start + 1};
        case 'INDIVIDUAL_USER_DATA_RECIEVED':
            console.log('in here', action);
            return {...state, "userData" : userData}
        default:
            return state;
    }
};

export default user;