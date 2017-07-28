/**
 * Created by vipulkumarsharma on 28/07/17.
 */
/**
 * Created by vipulkumarsharma on 28/07/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUserData } from '../actions'

class UsersDetails extends Component {

    componentDidMount() {
        // Call github api to fetch user list.
        const {location } = window;
        let path = location.pathname.split('/')[1];
        this.props.getUserData(path);
    }

    render(){
        const {userData} = this.props.user;
        return (<div>
                {
                    userData && <ul className="userListHeading userDetails">
                        <li>Id</li>
                        <li>Avatar</li>
                        <li>Login</li>
                        <li>Html Url</li>
                    </ul>
                }
                {
                    userData && <ul className="userDetails">
                        <li>{userData.id}</li>
                        <li><img src={userData.avatar_url} alt={userData.avatar_url}/></li>
                        <li>{userData.login}</li>
                        <li>{userData.html_url}</li>
                    </ul>
                }
            </div>
        )
    }
}
export default connect(state => {
    const user = state.user || {};
    return {
        user
    }
},{
    getUserData
})(UsersDetails);