/**
 * Created by vipulkumarsharma on 28/07/17.
 */
export const getUsersList = (start = 0) => {
    return async(dispatch, getState) => {
        let startIndex = (start * 30) + 1;
        fetch('https://api.github.com/users?since=' + startIndex, {
            method: 'GET'
        }).then((response) => response.json())
            .then((responseJson) => {
                let currentState = getState();
                const {users} = currentState.user;
                if(users && users.length) {
                    responseJson = users.concat(responseJson);
                }
                dispatch({
                    type: 'USER_DATA_RECIEVED',
                    "users" : responseJson,
                    start
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

}

export function setTODOS(todos){
    console.log(todos);
    return {
        type: 'SET_TODO',
        "todos":todos
    }
}

export const getUserData = (userId='') => {
    return async(dispatch, getState) => {
        let currentState = getState();
        const {users} = currentState.user;
        if(users && users.length) {
            var found = false;
            for(var i = 0; i < users.length; i++) {
                if (users[i].login === userId) {
                    dispatch({
                        type: 'INDIVIDUAL_USER_DATA_RECIEVED',
                        "userData" : users[i]
                    })
                    return;
                }
            }
        }
        fetch('https://api.github.com/users/' + userId, {
            method: 'GET'
        }).then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type: 'INDIVIDUAL_USER_DATA_RECIEVED',
                    "userData" : responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}