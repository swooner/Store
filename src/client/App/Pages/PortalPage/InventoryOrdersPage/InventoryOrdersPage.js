
import React, { Component } from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import SubmitButton from '../../../Components/SubmitButton/SubmitButton';
import DeleteInventoryOrderMutation from '../mutations/DeleteInventoryOrderMutation';
import styles from '../PortalPage.css';

const InventoryOrdersPage = ( props ) => {
    const deleteInventoryOrder = ( inventory_order ) => {
        const { inventory_order_id } = inventory_order;
        const form = {
            inventory_order_id,
        };
        DeleteInventoryOrderMutation.commit( form );
    };
    // console.log( 'Inventory order page props:', props );
    const { inventory_order_list } = props;
    return (
        <div className={ styles.InventoryOrdersPage }>
            <div>Inventory Order Page</div>
            { inventory_order_list ? inventory_order_list.inventory_order_list.edges.map(( category, i ) => {
                category = category.node;
                return (
                    <InventoryOrder 
                        key={ i } 
                        inventory_order={ inventory_order }
                        deleteInventoryOrder={ deleteInventoryOrder } />
                )
            }) : [] }
        </div>
    )
};

const InventoryOrder = ({ inventory_order, deleteInventoryOrder }) => {
    const { product, quantity, status, created_at, received_at } = inventory_order;
    const { name } = product;
    return (
        <div className={ styles.InventoryOrder }>
            <div className={ styles.Name }>{ name }</div>
            <div className={ styles.Quantity }>{ quantity }</div>
            <SubmitButton style={ 'delete' } onClick={ ( ) => deleteInventoryOrder( inventory_order ) } text={ 'Delete order' } />
        </div>
    )
};


export default createFragmentContainer( InventoryOrdersPage, {
    inventory_order_list: graphql`
        fragment InventoryOrdersPage_inventory_order_list on Query @argumentDefinitions (
            first: { type: "Int" }
        ) {
            inventory_order_list ( first: 10 ) @connection( key: "InventoryOrdersPage_inventory_order_list" ) {
                edges {
                    node {
                        product {
                            name
                        }
                        quantity
                        status
                        created_at
                        received_at
                    }
                }
            }
        }
    `
});