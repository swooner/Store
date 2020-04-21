
import React, { useState, useEffect, Component } from 'react';
import { graphql, createRefetchContainer } from 'react-relay';
import SubmitButton from '../../../Components/SubmitButton/SubmitButton';
import Input from '../../../Components/Input/Input';
import styles from '../PortalPage.css';
import UpdateRoleMutation from '../mutations/UpdateRoleMutation';

const AddEmployee = ( props ) => {
    let [ query, setQuery ] = useState( '' );
    let [ activeRole, setFormRole ] = useState( 'employee' );
    let [ activeUser, setActiveUser ] = useState( null );
    useEffect( () => {
        refetch();
    }, [ query ] );
    const handleQuery = ( e ) => {
        setQuery( e.target.value );
    }
    const refetch = () => {
        // console.log( 'query:', query );
        if ( query.length ) {
            props.relay.refetch(
                {
                    query,
                    first: 10, 
                },
                null,
                () => { },
                { force: true },
            );
        }
    };
    const selectEmployee = ( user ) => {
        console.log( 'user:', user );
        const { employee_info } = user;
        setQuery( '' );
        setActiveUser( user );
        setFormRole( employee_info ? employee_info.role : null );
    };
    const changeRole = ( e ) => {
        setFormRole( e.target.value );
    };
    const submitEmployeeForm = ( ) => {
        const form = {
            user_id: activeUser.user_id,
            role: activeRole === 'none' ? 'employee' : activeRole,
        };
        UpdateRoleMutation.commit( form );
        window.location.replace( '/portal/employees' );
    };
    const { user_search, name } = props;
    // console.log( 'AddEmployee props:', props );
    console.log( 'activeUser:', activeUser );
    return (
        <div className={ styles.AddEmployee }>
            <div className={ styles.UserSearch }>
                <Input
                    name={ name } 
                    value={ query }
                    placeholder={ 'Search users' } 
                    onKeyDown={ ( e ) => handleQuery( e ) }
                    onChange={ ( e ) => handleQuery( e ) } />
                { query.length > 0 &&
                    <Results
                        results={ user_search.user_search }
                        onClick={ selectEmployee } />
                }
            </div>
            { activeUser && 
                <EmployeeForm 
                    activeRole={ activeRole }
                    onRoleChange={ changeRole }
                    activeUser={ activeUser }
                    onSubmitClick={ submitEmployeeForm } />
            }
        </div>
    )
};

const Results = ({ results, onClick }) => {
    return (
        <div className={ styles.Results }>
            { results.edges.map(( result, i ) => {
                result = result.node;
                return (
                    <Result key={ i } result={ result } onClick={ onClick } />
                )
            })}
        </div>
    )
};

const Result = ({ result, onClick }) => {
    return (
        <div className={ styles.UserResult } onClick={ () => onClick( result ) }>
            <div className={ styles.FirstName }>{ result.first_name }</div>
            <div className={ styles.LastName }>{ result.last_name }</div>
            <div className={ styles.AccountName }>{ result.account_name }</div>
        </div>
    )
};

const EmployeeForm = ({ activeUser, activeRole, onRoleChange, onSubmitClick }) => {
    const { first_name, last_name } = activeUser;
    console.log( 'activeRole:', activeRole );
    return (
        <div className={ styles.EmployeeForm }>
            <div className={ styles.FirstName }>{ first_name }</div>
            <div className={ styles.LastName }>{ last_name }</div>
            <select onChange={ ( e ) => onRoleChange( e ) } value={ activeRole || 'none' }>
                <option value={ 'none' }>Select role</option>
                <option value={ 'employee' }>Employee</option>
                <option value={ 'manager' }>Manager</option>
                <option value={ 'inventory' }>Inventory</option>
            </select>
            <SubmitButton onClick={ ( ) => onSubmitClick( ) } text={ 'Update' } />
        </div>
    )
};



export default createRefetchContainer(
   AddEmployee,
    {
        user_search: graphql`
            fragment AddEmployee_user_search on Query @argumentDefinitions(
                first: { type: "Int" },
                query: { type: "String" },
            ) {
                user_search ( 
                    query: $query,
                    first: $first, 
                ) @connection( key: "AddEmployee_user_search" ) {
                    edges {
                        node {
                            user_id
                            first_name
                            last_name
                            account_name
                            employee_info {
                                role
                            }
                        }
                    }
                }
            }
        `,
    },
    graphql`
        query AddEmployeeQuery( 
            $query: String,
            $first: Int,
        ) {
            ...AddEmployee_user_search @arguments ( 
                query: $query, 
                first: $first, 
            )
        }
    `
);