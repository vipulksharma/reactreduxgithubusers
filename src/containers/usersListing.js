/**
 * Created by vipulkumarsharma on 28/07/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUsersList } from '../actions'
import { withRouter } from 'react-router-dom'

class UsersListing extends Component {

    componentDidMount() {
        // Call github api to fetch user list.
        this.props.getUsersList(this.props.users.start);
    }

    loadMore = () => {
        this.props.getUsersList(this.props.users.start);
    }

    goToDetails(id) {
        this.props.history.push(id);
    }
    render(){
        const {users}  = this.props.users;
        return (<div>
                <h1 className={"userListHeading"}>
                    Github Users List
                </h1>
                {
                    users && users.map((val, index) => {
                        return (<div key={val.login + index} className={(index % 2 === 0) ? "userListing" : "userListing odd"}>
                            <img src={val.avatar_url} alt={val.avatar_url}></img>

                            <div>{val.login}</div>
                            <button className={"btn"} onClick={() => this.goToDetails(val.login)}>Details</button>
                        </div>)
                    })
                }
                {
                    users && <button className={"btn loadMore"} onClick={this.loadMore}>Load More</button>
                }
            </div>
        )
    }

}
export default withRouter(connect(state => {
        const users = state.user || {};
return {
    users
}
},{
    getUsersList
})(UsersListing));
