import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addToCart } from '../store';


const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state);
  const { productFilter } = useParams();
 
  let filtered;

  if(productFilter === 'all'){
    filtered = products;
  };

  if(productFilter === 'dog' || productFilter === 'cat'){
    filtered = products.filter(product => product.petType === productFilter);
  };

  return (
    <div>
      <h2 className='prods'>Products </h2>
      <div className='product-filterContainer'>
        <div className='product-filterLabels' ><Link to='/products/all' className={productFilter === 'all' ? 'selected' : ''}>All</Link></div>
        <div className='product-filterLabels'><Link to='/products/dog' className={productFilter === 'dog' ? 'selected' : ''}>Dog</Link></div>
        <div className='product-filterLabels'><Link to='/products/cat' className={productFilter === 'cat' ? 'selected' : ''}>Cat</Link></div>
      </div>
        <div id='container'>
          {
            filtered.map( product => {
              return (
                <div className='product-card' key={product.id}>
                  <div className='image-container'>
                    <Link to={product.id}>
                      <img className='product-image' src={product.imageUrl} />
                      <div className="overlay">{product.description}</div>
                    </Link>
                  </div>
                  <div className='prod-name'>{product.name}</div>
                  <div className='price-add-to-cart'>
                    ${product.price}
                    <button onClick={() => dispatch(addToCart(product, 1))}><i className="fa fa-shopping-cart"></i> Add to cart</button>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  );
};

export default Products;

