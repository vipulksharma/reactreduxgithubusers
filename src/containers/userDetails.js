/**
 * Created by vipulkumarsharma on 28/07/17.
 */
/**
 * Created by vipulkumarsharma on 28/07/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setTODOS } from '../actions'
//Component Create
//Component Update
// Destroy
class UsersDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error : '',
            currentTODO : ''
        };
    }
    componentDidMount() {
        // Call github api to fetch user list.
        this.props.setTODOS([]);
    }
    addTODO = () => {
        const {currentTODO} = this.state;
        if(!currentTODO) {
            this.setState({error: true})
        } else {
            let {todos} = this.props;
            console.log(todos);
            todos.todos.push(currentTODO);
            // this.setState({"todos" : todos});
            this.props.setTODOS(todos.todos);
        }
    }
    todoValue = (event) => {
        this.setState({currentTODO : event.target.value, error: false});
    }
    render(){
        const { error, currentTODO } = this.state;
        const {todos} = this.props;
        console.log(todos);
        return (<div>
            <div className="header">TODO List</div>
            <div className="row">
                <div className="col-3 menu">
                    <input type="text"  placeholder="Please enter TODO" onChange={this.todoValue}></input>
                    {
                        error && <div className="red">Please enter TODO</div>
                    }
                    <button onClick={this.addTODO}>Click me</button>
                </div>
                <div ref="homeDisplay">
                    <ul>
                        {todos.todos && todos.todos.length > 0 && todos.todos.map((val, index) => {
                            return (
                                <div>{val}</div>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="footer">{localStorage.vipul}©Surya Pratap Badal : badal2206@gmail.com</div>
        </div>
        )
    }
}
export default connect(state => {
    const todos = state.user || [];
    return {
        todos
    }
},{
    setTODOS
})(UsersDetails);

