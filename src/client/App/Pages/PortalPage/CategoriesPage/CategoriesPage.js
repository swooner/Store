
import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { graphql, createFragmentContainer } from 'react-relay';
import AddCategory from './AddCategory';
import DeleteCategoryMutation from '../mutations/DeleteCategoryMutation';
import SubmitButton from '../../../Components/SubmitButton/SubmitButton';
import styles from '../PortalPage.css';

const CategoryPage = ( props ) => {
    const { viewer } = props;
    const deleteCategory = ( category ) => {
        const { category_id } = category;
        const form = {
            category_id,
        };
        DeleteCategoryMutation.commit( form );
        window.location.reload( );
    };
    // console.log( 'Portal category page props:', props );
    let { category_list } = props;
    return (
        <div className={ styles.CategoryPage }>
            { viewer && viewer.role === 'manager' &&
                <nav>
                    <li>
                        <Link to={ '/portal/categories/add-category' }>Add Category</Link>
                    </li>
                </nav>
            }
            <Switch>
                <Route exact path='/portal/categories/add-category' render={ () => {
                    return viewer && viewer.role == 'manager' ? (
                        <AddCategory
                            { ...props } />
                    ) : <Redirect to={ '/' } />
                }} />
            </Switch>
            <div className={ styles.Table }>
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
        </div>
    )
};

const Category = ({ category, deleteCategory }) => {
    const { name, description } = category;
    return (
        <div className={ styles.Category }>
            <div className={ styles.Name }>{ name }</div>
            <div className={ styles.Description }>{ description && description.length ? description : '---' }</div>
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