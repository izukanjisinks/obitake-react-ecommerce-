import React from 'react'
import styled from 'styled-components';

import Product from './Product';

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

const Products = ({addToCart,products}) => {
  return (
    <Container>
        {products.length > 0 ?  products.map(item => (
            <Product addToCart={addToCart} item={item} key={item.id} />
        )) : <div style={{height: '65vh',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}> No Products Found! </div>} 
    </Container>
  )
}

export default Products;