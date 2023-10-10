import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                 firstName:'',
                 lastName :'',
                 emailID:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }
     
      saveEmployee= (e) => {
        e.preventDefault();
        let employee = {firstName:this.state.firstName, lastName:this.state.lastName, emailID:this.state.emailID};
        console.log('employee =>' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res =>{
           this.props.history.push('/employees');
        });
    }
    changeFirstNameHandler=(event)=> {
        this.setState({firstName:event.target.value});
    }
    changeLastNameHandler=(event)=> {
        this.setState({lastName:event.target.value});
    }
    changeEmailIDHandler=(event)=> {
        this.setState({emailID:event.target.value});
    }
    cancel(){
        this.props.history.push('/employees');
    }


    render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>       
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label htmlFor = "FirstName"> First Name: </label>
                                        <input id="FirstName" name="firstName" className="form-control" 
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label htmlFor="LastName"> Last Name: </label>
                                        <input id="LastName" name="lastName" className="form-control" 
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label htmlFor="EmailAddress"> Email Id: </label>
                                        <input id="EmailAddress" name="emailId" className="form-control" 
                                            value={this.state.emailId} onChange={this.changeEmailIDHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
        )
    }
}


export default CreateEmployeeComponent;