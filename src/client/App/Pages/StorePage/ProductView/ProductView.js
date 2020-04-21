import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SizeSelect from '../../../Components/SizeSelect/SizeSelect';
import QuantitySelect from '../../../Components/QuantitySelect/QuantitySelect';
import SubmitButton from '../../../Components/SubmitButton/SubmitButton';
import AddCartItemMutation from '../mutations/AddCartItemMutation';
import styles from '../StorePage.css';

const NOT_APPLICABLE_SIZE_ID = 0;

const ActiveProduct = ( props ) => {
    // console.log( 'props:', props );
    const history = useHistory( );
    const activeProduct = props.activeProduct || props.activeHoverProduct;
    const { viewer, activeProduct: isActiveProduct, activeHoverProduct: isHoverProduct } = props;
    const { product_id, name, description, price, sizes, picture_url } = activeProduct;
    const [ productForm, updateProductForm ] = useState( { quantity: 1, size: sizes.length ? sizes[ 0 ] : null } );
    const [ dynamicPrice, updateDynamicPrice ] = useState( price );

    const setDynamicPrice = ({ price, surcharge, quantity }) => {
        const newPrice = parseFloat( ( ( price + surcharge ) * quantity ).toFixed( 2 ) );
        updateDynamicPrice( newPrice );
    };
    const updateSize = ( e ) => {
        const newSizeIndex = e.target.value;
        const newSize = sizes[ newSizeIndex ];
        setDynamicPrice({ price, surcharge: newSize.surcharge, quantity: productForm.quantity });
        updateProductForm({ ...productForm, size: newSize })
    };
    const updateQuantity = ( e ) => {
        const newQuantity = parseInt( e.target.value );
        const currentSizeSurcharge = productForm.size ? productForm.size.surcharge : 0;
        setDynamicPrice({ price, surcharge: currentSizeSurcharge, quantity: newQuantity });
        updateProductForm({ ...productForm, quantity: newQuantity })
    };
    useEffect(() => {
        const product = activeProduct;
        setDynamicPrice({ price: product.price, surcharge: 0, quantity: 1 })
    }, [ activeProduct ])
    const submitForm = ( e ) => {
        if ( !viewer ) {
            history.push( '/login' );
            return false;
        }
        const { user_id } = viewer;
        const { size, quantity } = productForm;
        const form = {
            size_id: size ? size.product_size_id : NOT_APPLICABLE_SIZE_ID,
            quantity,
            product_id,
            user_id,
        };
        console.log( 'form:', form );
        AddCartItemMutation.commit( form );
        props.selectProduct( e, null );
        window.location.replace( '/' )
    };
    // console.log( 'activeProduct:', activeProduct );
    const img_url = `/public/${ picture_url }`;
    // console.log( 'isActiveProduct:', isActiveProduct );
    // console.log( 'isHoverProduct:', isHoverProduct );
    // console.log( 'viewer:', viewer );
    return (
        // <div className={ styles.ProductView }>
        <div className="card mb-3" style={{marginTop: 30}}>
                { isActiveProduct ? (
                    // <div className={ styles.ActiveProduct }>
                    <div className="row no-gutters">
                        <button className={ styles.Close } onClick={ ( e ) => props.selectProduct( e, null ) }>Close</button>
                        { picture_url &&
                            <div className="col-md-6">
                                {/* <img className={ styles.Photo } src={ img_url } alt=""/> */}
                                <img className="card-img" src={ img_url } alt=""/>
                            </div>
                        }
                        <div className="col-md-6" style={{display:"flex", alignItems:"center"}}>
                            <div className="card-body">
                                <h3 className="card-title">{ name }</h3>
                            {/* <div className={ styles.Name }>{ name }</div> */}
                                <p className="card-text">{ description }</p>
                            {/* <div className={ styles.Description }>{ description }</div> */}
                            <div className={ styles.Price }>${ dynamicPrice }</div>
                            <div className={ styles.SizeAndQuantity }>
                                { sizes && sizes.length > 0 && 
                                    <SizeSelect sizes={ sizes } onChange={ ( e ) => updateSize( e ) } />
                                }
                                <QuantitySelect onChange={ ( e ) => updateQuantity( e ) } />
                            </div>
                            <SubmitButton text={ 'Add to cart' } onClick={ ( e ) => submitForm( e ) } />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={ styles.HoverProduct }>
                        <img className={ styles.image } src={ img_url } alt=""/>
                    </div>
                )}
        </div>
    )
};

export default ActiveProduct;