/**
 * Created by vipulkumarsharma on 28/07/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'

class Loader extends Component {

    render(){
        const {users}  = this.props.users;
        return (<div>
            {
                !users &&
                    <div className="loader">
                        <svg viewBox="0 0 32 32" width="32" height="32">
                            <circle id="spinner" cx="16" cy="16" r="14" fill="none"></circle>
                        </svg>
                    </div>
            }
            </div>
        )
    }
}
export default connect(state => {
    const users = state.user || {};
    return {
        users
    }
},{
})(Loader);

