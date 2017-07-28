/**
 * Created by vipulkumarsharma on 28/07/17.
 */
import { combineReducers } from 'redux';
import user from './user';


const userApp = combineReducers({
    user
})

export default userApp