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
            employeeDetail: [],
            error : '',
            page: 'home',
            currentInput : ''
        };
    }
    componentDidMount() {
        // Call github api to fetch user list.
        //this.props.setTODOS([]);
    }
   // addTODO = () => {
     //   const {currentInput} = this.state;
       // if(!currentInput) {
         //   this.setState({error: true})
        //} else {
          //  let {todos} = this.state;
           // console.log(todos);
           // todos.push(currentInput);
           // this.setState({"todos" : todos});
            //this.props.setTODOS(todos.todos);
        //}
    createData = () => {
        let {employeeDetail} = this.state;
        let formData = document.forms['myForm'];
        let date = formData.dob.value;
        let fName = formData.firstName.value;
        let lName = formData.lastName.value;
        let email = formData.email.value;
        let gender = formData.gender.value;
        let post = formData.wField.value;
        if (!fName || !lName || !date || !email) {
            this.setState({error: true});
            return;
        }
        let eid = Math.floor(Math.random()*10000);
        let employee = {
            'emp-id': eid,
            'firstName': fName,
            'lastName': lName,
            'gender': gender,
            'dob': date,
            'email': email,
            'post': post
        };
        employeeDetail.push(employee);
        this.setState({employeeDetail:employeeDetail});
        let {page} = this.state;
        this.setState({page:'home'});
    }
    changeData = (event) => {
        let {currentInput, error} = this.state;
        this.setState({currentInput : event.target.value});
        if(!currentInput) {this.setState({error:true})}
        else {this.setState({error:false});}
    }
    createNew = () => {
        const {page} = this.state;
        this.setState({page: 'create'});
    }
    homeDisplay = () => {
        const {page} = this.state;
        this.setState({page: 'home'});
    }
    updatePage = () => {
        const {error,currentInput} =this.state;
        return (
            <div>
                <div className="header">
                    <h1>Employee Enrolment</h1>
                </div>
                <div className="row">
                    <div className="col-3 menu">
                        <ul>
                            <button onClick={this.homeDisplay}>Home</button>
                        </ul>
                    </div>
                    <div  className="col-6">
                        <div className="head"><h2>New Employee Registration Form:</h2></div>
                        <form name="myForm1" className="formBack">
                                    <pre>
                                    <p><b>First Name :</b><input type="text" onChange={this.changeData} name="firstName" max="10" autoFocus required/>
                                        {
                                            error && <span className="red">*Please enter this Field</span>
                                        }</p>
                                    <p><b>Last Name  :</b><input type="text" onChange={this.changeData} name="lastName" max="10" required/>
                                        {
                                            error && <span className="red">*Please enter this Field</span>
                                        }</p>
                                    <p><b>Gender     :</b><select name="gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    </select></p>
                                    <p><b>DOB        :</b><input type="date" onChange={this.changeData} name="dob" max="1999-01-01" required/>
                                        {
                                            error && <span className="red">*Please enter this Field</span>
                                        }</p>
                                    <p><b>E-Mail     :</b><input type="email" onChange={this.changeData} name="email" required/>
                                        {
                                            error && <span className="red">*Please enter this Field</span>
                                        }</p>
                                    <p><b>Work-Field :</b></p>
                                        <input type="radio" value="Worker" name="wField" checked/>Worker
                                        <input type="radio" value="Engineer" name="wField"/>Engineer
                                        <input type="radio" value="Manager" name="wField"/>Manager
                                        <input type="radio" value="TeamLead" name="wField"/>Team Lead
                                    <p><input type="submit" value="Submit" onClick={this.updateData}/></p>
                                    </pre>
                        </form>
                    </div>
                    <div className="footer col-12">©Surya Pratap Badal : badal2206@gmail.com</div>
                </div>
            </div>
        )
    }
    createPage = () => {
        const {error,currentInput} =this.state;
        return (
            <div>
                <div className="header">
                    <h1>Employee Enrolment</h1>
                </div>
                <div className="row">
                    <div className="col-3 menu">
                        <ul>
                            <button onClick={this.homeDisplay}>Home</button>
                        </ul>
                    </div>
                    <div  className="col-6">
                        <div className="head"><h2>New Employee Registration Form:</h2></div>
                        <form name="myForm" className="formBack">
                                    <pre>
                                    <p><b>First Name :</b><input type="text" onChange={this.changeData} name="firstName" max="10" autoFocus required/>
                                        {
                                            error && <span className="red">*Please enter this Field</span>
                                        }</p>
                                    <p><b>Last Name  :</b><input type="text" onChange={this.changeData} name="lastName" max="10" required/>
                                        {
                                            error && <span className="red">*Please enter this Field</span>
                                        }</p>
                                    <p><b>Gender     :</b><select name="gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    </select></p>
                                    <p><b>DOB        :</b><input type="date" onChange={this.changeData} name="dob" max="1999-01-01" required/>
                                        {
                                            error && <span className="red">*Please enter this Field</span>
                                        }</p>
                                    <p><b>E-Mail     :</b><input type="email" onChange={this.changeData} name="email" required/>
                                        {
                                            error && <span className="red">*Please enter this Field</span>
                                        }</p>
                                    <p><b>Work-Field :</b></p>
                                        <input type="radio" value="Worker" name="wField" checked/>Worker
                                        <input type="radio" value="Engineer" name="wField"/>Engineer
                                        <input type="radio" value="Manager" name="wField"/>Manager
                                        <input type="radio" value="TeamLead" name="wField"/>Team Lead
                                    <p><input type="submit" value="Submit" onClick={this.createData}/> <input type="reset" value="Reset All"/></p>
                                    </pre>
                        </form>
                    </div>
                    <div className="footer col-12">©Surya Pratap Badal : badal2206@gmail.com</div>
                </div>
            </div>
        )
    }
    homePage = () => {
        const {employeeDetail} = this.state;
        return (
            <div>
                <div className="header">Employee Enrolment</div>
                <div className="row">
                    <div className="col-3 menu">
                        <ul>
                            <button onClick={this.homeDisplay}>Home</button>
                            <button onClick={this.createNew}>Create New</button>
                        </ul></div>
                    <div>
                        <table>
                        {employeeDetail && employeeDetail.length>0 && employeeDetail.map((val, index) => {
                            console.log(val);
                            return(<tr key={val["emp-id"]}>
                                <td>{val["emp-id"]}</td>
                                <td>{val.firstName}</td>
<td>{val.lastName}</td>
<td>{val.gender}</td>
<td>{val.email}</td>
                            </tr>)
                        })}
                    </table>
                    </div>
                </div>
                <div className="footer">©Surya Pratap Badal : badal2206@gmail.com</div>
            </div>
        )
    }
    render(){
        const {page} = this.state;
        if(page == 'home'){
            return this.homePage();
        }
        else if(page == 'create') {
            return this.createPage();
        }
        else if (page == 'update') {
            return this.updatePage();
        }
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

