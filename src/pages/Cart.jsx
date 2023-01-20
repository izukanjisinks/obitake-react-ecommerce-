import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import {dCost,myCart } from './data';
import {mobileS,mobileL,tablet,laptop,laptopL,desktop} from '../resonsive'

const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 20px;
  `;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
${mobileS({ justifyContent: "center" })}
${mobileL({ justifyContent: "center" })}
${tablet({ justifyContent: "center" })}
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
${mobileS({ display: "none" })}
${mobileL({ display: "none" })}

`;
const TopText = styled.span`
  font-weight: 100;
  font-size: 20px;
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobileL({flexDirection: "column" })}
${tablet({ flexDirection: "column", padding: "10px" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  marginBottom: "15px";
  ${mobileS({ marginBottom: "15px" })}
${mobileL({ marginBottom: "15px" })}
${tablet({ marginBottom: "15px" })}
${laptop({ marginBottom: "15px" })}
${laptop({ marginBottom: "15px" })}
${laptopL({ marginBottom: "15px" })}
${desktop({ marginBottom: "15px"})}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
margin-bottom: 5px;
`;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const descWidth = styled.div`
width: 55%;
background-color: yellow;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 0px 15px;

`;

const ProductPrice = styled.div`
   margin-top: 5px;
  font-size: 30px;
  font-weight: 200;

`;

const Hr = styled.hr`
  background-color: rgb(0,0,0);
  border: none;
  height: 2px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  color: white;
  font-weight: 600;
`;

const RemoveButton = styled.button`
  margin-top: 20px;
  padding: 5px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

class Cart extends React.Component{

  constructor(){
    super();
    this.state = {
        cart: myCart,
        route: 'cart',
        cartCount: myCart.length
    }
}

  add = (item) => {
    let index = myCart.indexOf(item);
    if(item.quantity <= 5)
    item.quantity = item.quantity + 1;
    item.total = item.price * item.quantity;
   myCart[index] = item;
    this.setState({cart: myCart});
}

remove = (item) => {
  let index = myCart.indexOf(item);
  if(item.quantity > 1)
  item.quantity = item.quantity - 1;
  item.total = item.price * item.quantity;
  myCart[index] = item;
  this.setState({cart: myCart});

} 

removeItem = (item) => {
  let index = myCart.indexOf(item);
  myCart.splice(index,1);
  this.setState({cart: myCart});
}

onRouteChange = (routeName) => {
  this.setState({route: routeName});
  }

  
  
 render(){
  
  let subtotal = 0;
  let total = 0;
  let deliveryCost = dCost;

  function count(){
    // if the cart array has noting, this evaluates to false which we invert to true and set the delivery cost to 0  
    if(!(myCart.length))
    deliveryCost = 0;

    myCart.map((item)=>{
     subtotal = parseFloat(item.total) + parseFloat(subtotal); 
   })
   total = subtotal + parseFloat(deliveryCost);
  
  }
  
  count();

    return (
      <Container>
        <Wrapper>
          <Title>
            SHOPPING CART
            <TopTexts>
              <TopText >Shopping Bag({this.state.cartCount})</TopText>
            </TopTexts>
            </Title>
          
          <Top>
            <TopButton onClick={(e)=>this.props.onRouteChange("products")} >CONTINUE SHOPPING</TopButton>
            
            {/* <TopButton type="filled">CHECKOUT NOW</TopButton> */}
          </Top>
          
          <Bottom>
            <Info>

              {
  
             myCart.map((item) => (
              <Product>
                <ProductDetail>
                  <Image src={item.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {item.name}
                    </ProductName>
                    {/* <ProductId>
                      <b>ID:</b> {item.id}
                    </ProductId> 
                    <ProductColor color="black" />
                    <ProductSize>
                      <b>Size:</b> {item.size}
                    </ProductSize>*/}
                    <b>Description:</b>
                    <div style={{ width: '55%', marginTop : 5}}>
                     {item.desc}
                    </div>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add onClick={()=>this.add(item)}/>
                    <ProductAmount>{item.quantity}</ProductAmount>
                    <Remove onClick={()=>this.remove(item)}/>
                  </ProductAmountContainer>
                  <ProductPrice>Price K { item.total}</ProductPrice>
                  <RemoveButton onClick={()=>this.removeItem(item)} >Remove</RemoveButton>
                </PriceDetail>
                <Hr/>
              </Product>
              
                  ))
              }

            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>
                  K {subtotal}
                </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Delivery Cost</SummaryItemText>
                <SummaryItemPrice>K {deliveryCost}</SummaryItemPrice>
              </SummaryItem>
             <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>K {total}</SummaryItemPrice>
              </SummaryItem>
              {
                deliveryCost === 0 ? <Button style={{backgroundColor:"teal"}}  >CHECKOUT NOW</Button> : <Button style={{backgroundColor:"black"}} onClick={(e)=>this.props.onRouteChange("checkout")} >CHECKOUT NOW</Button>
              }
              
            </Summary>
          </Bottom>
        </Wrapper>
      </Container>
    );  
 }
};
export default Cart