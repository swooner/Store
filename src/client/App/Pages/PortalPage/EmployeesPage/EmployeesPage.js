
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { graphql, createFragmentContainer } from 'react-relay';
import SubmitButton from '../../../Components/SubmitButton/SubmitButton';
import AddEmployee from './AddEmployee';
import UpdateRoleMutation from '../mutations/UpdateRoleMutation';
import DeleteEmployeeMutation from '../mutations/DeleteEmployeeMutation';
import styles from '../PortalPage.css';

const EmployeePage = ( props ) => {
    const changeRole = ( value, employee ) => {
        console.log( 'value:', value );
        const form = {
            E_Cus_ID: employee.user_id,
            E_role: value,
        };
        UpdateRoleMutation.commit( form );
    };
    const deleteEmployee = ( employee ) => {
        const form = {
            E_Cus_ID: employee.user_id,
        };
        DeleteEmployeeMutation.commit( form );
    };
    // console.log( 'Employee List page props:', props );
    const { employees_list } = props;
    return (
        <div className={ styles.EmployeeList }>
            <div>Employee List Page</div>
            <nav>
                <li>
                    <Link to={ '/portal/employees/add-employee' }>Add Employee</Link>
                </li>
            </nav>
            <Switch>
                <Route path='/portal/employees/add-employee' render={ () => {
                    return (
                        <AddEmployee
                            { ...props }
                            user_search={ props } />
                    )
                }} />
            </Switch>
            { employees_list ? employees_list.employee_list.edges.map(( employee, i ) => {
                employee = employee.node;
                return (
                    <Employee 
                        key={ i } 
                        employee={ employee }
                        changeRole={ changeRole }
                        deleteEmployee={ deleteEmployee } />
                )
            }) : [] }
        </div>
    )
};

const Employee = ({ employee, changeRole, deleteEmployee }) => {
    const { user_id, first_name, last_name, employee_info } = employee;
    return (
        <div className={ styles.Employee }>
            <div className={ styles.FirstName }>{ first_name }</div>
            <div className={ styles.LastName }>{ last_name }</div>
            <select onChange={ ( e ) => changeRole( e, employee ) } value={ employee_info.role }>
                <option value={ 'employee' }>Employee</option>
                <option value={ 'manager' }>Manager</option>
                <option value={ 'inventory' }>Inventory</option>
            </select>
            <SubmitButton style={ 'delete' } onClick={ ( ) => deleteEmployee( employee ) } text={ 'Delete employee' } />
        </div>
    )
};


export default createFragmentContainer( EmployeePage, {
    employee_list: graphql`
        fragment EmployeesPage_employee_list on Query @argumentDefinitions (
            first: { type: "Int" }
        ) {
            employee_list ( first: 10 ) @connection( key: "EmployeesPage_employee_list" ) {
                edges {
                    node {
                        user_id
                        first_name
                        last_name
                        employee_info {
                            role
                        }
                    }
                }
            }
        }
    `
});