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
            //employeeDetail: [],
            currentId: '',
            page: 'home',
        };
    }
    componentDidMount() {
    //    let {employeeDetail} = this.state;
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
        document.getElementById("fAlert").style.display = "none";
        document.getElementById("lAlert").style.display = "none";
        document.getElementById("dAlert").style.display = "none";
        document.getElementById("eAlert").style.display = "none";
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let formData = document.forms['myForm'];
        let date = formData.dob.value;
        let fName = formData.firstName.value;
        let lName = formData.lastName.value;
        let email = formData.email.value;
        let gender = formData.gender.value;
        let post = formData.wField.value;
        if (date == "" || fName == "" || lName == "") {
            if(fName == "") {document.getElementById("fAlert").style.display = "inline";return;}
            if(lName == "") {document.getElementById("lAlert").style.display = "inline";return;}
            if(date == "") {document.getElementById("dAlert").style.display = "inline";return;}
        }
        else if(email == "" || !re.test(email)) {document.getElementById("eAlert").style.display = "inline";return;}

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
        let empData = JSON.parse(localStorage.getItem('employeeDetail')) || [];
        empData.push(employee);
        localStorage.setItem('employeeDetail',JSON.stringify(empData));
        //employeeDetail.push(employee);
        //this.setState({employeeDetail:employeeDetail});
        let {page} = this.state;
        this.setState({page:'home'});
    }
    updateEmp (id){
        const {currentId,page} = this.state;
        this.setState({currentId:id});
        this.setState({page:'update'});
    }
    updateData = () => {
        document.getElementById("fAlert1").style.display = "none";
        document.getElementById("lAlert1").style.display = "none";
        document.getElementById("dAlert1").style.display = "none";
        document.getElementById("eAlert1").style.display = "none";
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let formData = document.forms['myForm1'];
        let eid = formData.empId.value;
        let date = formData.dob.value;
        let fName = formData.firstName.value;
        let lName = formData.lastName.value;
        let email = formData.email.value;
        let gender = formData.gender.value;
        let post = formData.post.value;
        if(!re.test(email)) {document.getElementById("eAlert1").style.display = "inline";return;}

        let employee = {
            'emp-id': eid,
            'firstName': fName,
            'lastName': lName,
            'gender': gender,
            'dob': date,
            'email': email,
            'post': post
        };
        let empData = JSON.parse(localStorage.getItem('employeeDetail'));
        {empData && empData.length>0 && empData.map((val, index) => {
            if(val['emp-id'] == eid) {
                empData[index] = employee;
                localStorage.setItem('employeeDetail',JSON.stringify(empData))
            }
        })}
        //employeeDetail.push(employee);
        //this.setState({employeeDetail:employeeDetail});
        let {page} = this.state;
        this.setState({page:'home'});
    }
    deleteEmp (id){
        const {currentId,page} = this.state;
        this.setState({currentId:id});
        let newData,empData = JSON.parse(localStorage.getItem('employeeDetail'));
        {empData && empData.length>0 && empData.map((val, index) => {
            if(val['emp-id']== currentId) {
                newData = empData.splice(index,1);
                localStorage.setItem('employeeDetail',JSON.stringify(empData));
                //this.setState({employeeDetail:employeeDetail});
                this.setState({page:'home'});
                return;
            }
        })}

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
        const {currentId} = this.state;
        let empData = JSON.parse(localStorage.getItem('employeeDetail'));
        return (
            <div>
                <div className="header">
                    <h1>Update employee</h1>
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
                            {empData && empData.length >0 && empData.map((val, index) =>{
                                if (val['emp-id']== currentId){
                                    return(
                                        <pre>
                                    <p><b>Employee Id:</b><input type="text" name="empId" max="10" value={val['emp-id']} readOnly/>
                                    </p>
                                    <p><b>First Name :</b><input type="text" name="firstName" max="10" defaultValue={val['firstName']} autoFocus/><span id="fAlert1" className="red" style={{display: 'none'}}>*Please enter First Name</span>
                                    </p>
                                    <p><b>Last Name  :</b><input type="text" name="lastName" max="10" defaultValue={val['lastName']}/><span id="lAlert1" className="red" style={{display: 'none'}}>*Please enter Last Name</span>
                                    </p>
                                    <p><b>Gender     :</b><select name="gender" value={val['gender']}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    </select></p>
                                    <p><b>DOB        :</b><input type="date" name="dob" max="1999-01-01" defaultValue={val['dob']}/><span id="dAlert1" className="red" style={{display: 'none'}}>*Please enter the DOB</span>
                                    </p>
                                    <p><b>E-Mail     :</b><input type="email" name="email" defaultValue={val['email']}/><span id="eAlert1" className="red" style={{display: 'none'}}>*Please enter the Email ID</span>
                                    </p>
                                    <p><b>Work-Field     :</b><select name="post" defaultValue={val['post']}>
                                    <option value="Engineer">Engineer</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Worker">Worker</option>
                                    <option value="Team-lead">Team-Lead</option>
                                    </select></p>
                                    <p><input type="submit" value="Submit" onClick={this.updateData}/></p>
                            </pre>
                                    )
                                }
                            })}
                        </form>
                    </div>
                    <div className="footer col-12">©Surya Pratap Badal : badal2206@gmail.com</div>
                </div>
            </div>
        )
    }
    createPage = () => {
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
                                    <p><b>First Name :</b><input type="text" name="firstName" max="10" autoFocus required/><span id="fAlert" className="red" style={{display:'none'}}>*Please enter First Name</span>
                                    </p>
                                    <p><b>Last Name  :</b><input type="text" name="lastName" max="10" required/><span id="lAlert" className="red" style={{display:'none'}}>*Please enter Last Name</span>
                                    </p>
                                    <p><b>Gender     :</b><select name="gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    </select></p>
                                    <p><b>DOB        :</b><input type="date" name="dob" max="1999-01-01" required/><span id="dAlert" className="red" style={{display:'none'}}>*Please enter the DOB</span>
                                    </p>
                                    <p><b>E-Mail     :</b><input type="email" name="email" required/><span id="eAlert" className="red" style={{display:'none'}}>*Please enter the Email ID</span>
                                    </p>
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
        const {page} = this.state;
        const empData = JSON.parse(localStorage.getItem('employeeDetail'));
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
                            <tr>
                                <th></th>
                                <th>Employee Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Gender</th>
                                <th>E-mail</th>
                                <th>DOB</th>
                                <th>Post</th>
                                <th></th>
                            </tr>
                        {empData && empData.length>0 && empData.map((val, index) => {
                            let id = val['emp-id'];
                            return(<tr key={val["emp-id"]}>
                                <td><button type="button" onClick={()=>this.updateEmp(val['emp-id'])}>UPDATE</button></td>
                                <td>{val["emp-id"]}</td>
                                <td>{val.firstName}</td>
                                <td>{val.lastName}</td>
                                <td>{val.gender}</td>
                                <td>{val.email}</td>
                                <td>{val.dob}</td>
                                <td>{val.post}</td>
                                <td><button type="button" onClick={()=>this.deleteEmp(val['emp-id'])}>DELET</button></td>
                            </tr>)
                        })}
                    </table>
                    </div>
                </div>
                <div className="footer">{localStorage.badal}©Surya Pratap Badal : badal2206@gmail.com</div>
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

