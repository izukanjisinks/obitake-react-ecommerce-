import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobileS,mobileL,tablet} from '../resonsive'
const Container = styled.div`
  height: 60px;
  ${mobileL({ height: "50px" })}
  ${mobileS({ height: "50px" })}
  ${tablet({ height: "65px" })}
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobileL({ padding: "10px 0px" })}
${mobileS({ padding: "10px 0px" })}
${tablet({ padding: "10px 0px" })}
`;


const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 0px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 60%;
  margin: 5px 20px;
  padding: 0px;
  border: none;
  outline: none;
  ${mobileL({ width: "50px" })}
  ${mobileS({ width: "50px" })}
  ${tablet({ width: "80px" })}
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center
`;
const Center = styled.div`
text-align: center;
flex: 1`;

const Logo = styled.h1`
font-weight: bold;
cursor: pointer;
${mobileL({ fontSize: "20px" })}
${mobileS({ fontSize: "18px" })}
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items-center;
justify-content: flex-end;
${mobileL({ flex: 1, justifyContent: "center" })}
${mobileS({ flex: 1, justifyContent: "center" })}
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-right: 10px;
${mobileL({ fontSize: "12px", marginLeft: "10px", })}
${mobileS({ fontSize: "12px", marginLeft: "10px", })}
`;

const Navbar = ({onRouteChange,cartNum,onSearchChange}) => {
  return (
    <Container>
        <Wrapper>
            <Left>
            <Logo onClick={(e)=>onRouteChange("home")}>
              OBITAKE DELIVERY
              </Logo>
            </Left>
             <Center>
                 <SearchContainer>
                  <Input onChange={(onSearchChange)} ></Input>
                  <div onClick={(e)=>onRouteChange("products")}  style={{backgroundColor:"blue", width:"40px", height:'35px',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}>
                  <Search style={{color:"white",fontsize: 18,}} ></Search>
                  </div>
                 </SearchContainer>
              
             </Center>
             <Right>
              <MenuItem onClick={(e)=>onRouteChange("cart")}>
                CART
              </MenuItem>
              <Badge badgeContent={cartNum} color='primary'>
                <ShoppingCartOutlined style={{cursor:"pointer"}} onClick={(e)=>onRouteChange("cart")} />
              </Badge>
             </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar