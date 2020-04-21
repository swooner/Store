
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { graphql, createFragmentContainer } from 'react-relay';
import AddCategory from './AddCategory';
import DeleteCategoryMutation from '../mutations/DeleteCategoryMutation';
import SubmitButton from '../../../Components/SubmitButton/SubmitButton';
import styles from '../PortalPage.css';

const CategoryPage = ( props ) => {
    const deleteCategory = ( category ) => {
        const { category_id } = category;
        const form = {
            category_id,
        };
        DeleteCategoryMutation.commit( form );
        window.location.replace( '/portal/categories' );
    };
    // console.log( 'Portal category page props:', props );
    let { category_list } = props;
    return (
        <div className={ styles.CategoryPage }>
            <nav>
                <li>
                    <Link to={ '/portal/categories/add-category' }>Add Category</Link>
                </li>
            </nav>
            <Switch>
                <Route exact path='/portal/categories/add-category' render={ () => {
                    return (
                        <AddCategory
                            { ...props } />
                    )
                }} />
            </Switch>
            <div className={ styles.Header }>
                <div className={ styles.Name }>Name</div>
                <div className={ styles.Description }>Description</div>
            </div>
            <div className={ styles.Body }>
                { category_list ? category_list.category_list ? category_list.category_list.map(( category, i ) => {
                    return (
                        <Category 
                            key={ i } 
                            category={ category }
                            deleteCategory={ deleteCategory } />
                    )
                }) : [] : [] }
            </div>
        </div>
    )
};

const Category = ({ category, deleteCategory }) => {
    const { name, description } = category;
    return (
        <div className={ styles.Category }>
            <div className={ styles.Name }>{ name }</div>
            <div className={ styles.Description }>{ description || 'N/A' }</div>
            <div className={ styles.DeleteButton } onClick={ ( ) => deleteCategory( category ) }>Delete</div>
        </div>
    )
};


export default createFragmentContainer( CategoryPage, {
    category_list: graphql`
        fragment CategoriesPage_category_list on Query @argumentDefinitions (
            first: { type: "Int" }
        ) {
            category_list ( first: 10 ) {
                category_id
                name
                description
            }
        }
    `
});