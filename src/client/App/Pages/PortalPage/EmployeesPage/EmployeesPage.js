
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { graphql, createFragmentContainer } from 'react-relay';
import SubmitButton from '../../../Components/SubmitButton/SubmitButton';
import AddEmployee from './AddEmployee';
import UpdateRoleMutation from '../mutations/UpdateRoleMutation';
import DeleteEmployeeMutation from '../mutations/DeleteEmployeeMutation';
import styles from '../PortalPage.css';

const EmployeePage = ( props ) => {
    const changeRole = ( e, employee ) => {
        const form = {
            user_id: employee.user_id,
            role: e.target.value,
        };
        // console.log( 'form:', form );
        UpdateRoleMutation.commit( form );
        window.location.replace( '/portal/employees' );
    };
    const deleteEmployee = ( employee ) => {
        const form = {
            user_id: employee.user_id,
        };
        DeleteEmployeeMutation.commit( form );
        window.location.replace( '/portal/employees' );
    };
    // console.log( 'Employee List page props:', props );
    const { employee_list } = props;
    return (
        <div className={ styles.EmployeeList }>
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
            <div className={ styles.Header }>
                <div className={ styles.Name }>Name</div>
                <div className={ styles.Role }>Role</div>
            </div>
            <div className={ styles.Body }>
                { employee_list ? employee_list.employee_list.edges.map(( employee, i ) => {
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
        </div>
    )
};

const Employee = ({ employee, changeRole, deleteEmployee }) => {
    // console.log( 'employee:', employee );
    const { user_id, first_name, last_name, role } = employee;
    return (
        <div className={ styles.Employee }>
            <div className={ styles.Name }>{ first_name + " " + last_name }</div>
            <select onChange={ ( e ) => changeRole( e, employee ) } value={ role }>
                <option value={ 'employee' }>Employee</option>
                <option value={ 'manager' }>Manager</option>
                <option value={ 'inventory' }>Inventory</option>
            </select>
            <div className={ styles.DeleteButton } onClick={ ( ) => deleteEmployee( employee ) }>Delete</div>
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
                        role
                    }
                }
            }
        }
    `
});