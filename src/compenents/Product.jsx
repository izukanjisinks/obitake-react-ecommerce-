import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { myCart } from '../pages/data';

import {tablet,mobileS,mobileL,laptop} from '../resonsive'

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 320px;
  height: 350px;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const CenterImage = styled.div`

width: 100%;
  height: 80%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;;
`;

const Info2 = styled.div`
 display: flex;
 align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

class Product extends React.Component {

 onClick = (value) => {
    myCart.push(value);
    
 }

 render(){

  return (
    <Container >
      <CenterImage>
      <Image src={this.props.item.img} />
      </CenterImage>
      
      {/* <Info>
        <Icon onClick={(e)=>this.props.addToCart(this.props.item)}>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon> */}
      <Info2>
      {this.props.item.name} K {this.props.item.price}
      <Icon onClick={(e)=>this.props.addToCart(this.props.item)}>
          <ShoppingCartOutlined />
        </Icon>
      </Info2>
      
    </Container>
  );
 }


};

export default Product