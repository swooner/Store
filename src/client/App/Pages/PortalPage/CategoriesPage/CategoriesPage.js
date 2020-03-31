
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
    };
    console.log( 'Portal category page props:', props );
    let { category_list } = props;
    return (
        <div className={ styles.CategoryPage }>
            <div>Portal Category Page</div>
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
            { category_list ? category_list.category_list ? category_list.category_list.map(( category, i ) => {
                return (
                    <Category 
                        key={ i } 
                        category={ category }
                        deleteCategory={ deleteCategory } />
                )
            }) : [] : [] }
        </div>
    )
};

const Category = ({ category, deleteCategory }) => {
    const { name, description } = category;
    return (
        <div className={ styles.category }>
            <div className={ styles.Name }>{ name }</div>
            <div className={ styles.Description }>{ description }</div>
            <SubmitButton style={ 'delete' } onClick={ ( ) => deleteCategory( category ) } text={ 'Delete category' } />
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