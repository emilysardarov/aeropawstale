import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import { addToCart } from '../store';
import {Link} from 'react-router-dom';


const ProductDetails= ()=> {
    const { id } = useParams();
    const { products } = useSelector(state => state);
    const product = products.find(product => product.id === id);
    const dispatch = useDispatch();

    if(!product) {
        return(
            <div>
                <img src='../../static/sadCat.jpg' width='300px'/>
            </div>
        )
    };
    
    return (
        <div>
            <div id='prod-details-container'>
                <div className='left-div'>
                    <img className='prod-img' src={product.imageUrl} />
                </div>
                <div className='right-div'>
                    <h2 className='h2-prod'> {product.name} </h2>
                    <div>${product.price}</div>
                    <div> {product.description} </div>
                    <button className='add-to-cart-btn' onClick={() => dispatch(addToCart(product, 1))} > Add to cart</button>
                </div>
            </div>

            <div id='related-prods-container'>
                <div className='related-title'>
                     You may also like 
                </div>
                <div className='related-products'>
                    {products.map((relatedProduct) => { 
                        if(relatedProduct.petType === product.petType && relatedProduct.category === product.category)
                        {
                            if(relatedProduct.id === product.id){
                                return (<div></div>)
                            }
                            return (
                            <div className='related-product-card' key={relatedProduct.id}>
                                <Link to={`/products/all/${relatedProduct.id}`}>
                                    <img src={relatedProduct.imageUrl} width='300px'/>
                                </Link>
                                    <div><strong>{relatedProduct.name}</strong></div>
                                    <div className='related-price-div'> ${relatedProduct.price} 
                                    <button className='add-to-cart-related' onClick={() => dispatch(addToCart(relatedProduct, 1))}><i className="fa fa-shopping-cart"></i>Add to cart</button>
                                    </div>
                                
                            </div>
                        )}
                    })}
                    
                </div>
            </div>
            
        </div>
        
    );

    
};

export default ProductDetails;