import { Facebook, Instagram, MailOutlineOutlined, Phone, Room, WhatsApp } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import {mobileS,mobileL,tablet} from '../resonsive'

const Container = styled.div`
display:flex;
width: 100%;
${mobileS({ flexDirection: "column"})}
${mobileL({ flexDirection: "column"})}
${tablet({ flexDirection: "column"})}
`;
const Left = styled.div`
flex:1;
display: flex;
flex-direction:column;
padding: 20px;

`;

const Logo = styled.h1`
`;
const Desc = styled.p`
margin: 20px 0px;
`;
const SocialContainer = styled.div`
display:flex;
 
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
color: white; 
border-radius: 50%;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
flex:1;
${mobileS({ display: "none" })}
${mobileL({ display: "none" })}
`;

const Title = styled.h3`
margin-top: 20px;
margin-bottom: 30px;
`;

const List = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;   
  cursor: pointer;
`;

const Right = styled.div`flex:1
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;


const Footer = ({onRouteChange}) => {
  return (
    <Container style={{backgroundColor:'rgba(0, 0, 0, 0.03)'}} >
        <Left>
            <Logo>E-Dev</Logo>
            <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quibusdam maxime itaque cum sequi perspiciatis autem molestiae veniam ut voluptas? Itaque velit autem voluptatum repudiandae quidem iste veritatis nesciunt natus?</Desc>
            <SocialContainer>
            <SocialIcon color='3B5999'>
                <Facebook/>
            </SocialIcon >
            <SocialIcon color='E4405F'>
                <Instagram/>
            </SocialIcon>
            <SocialIcon color='00FF00'>
                <WhatsApp/>
            </SocialIcon>
        </SocialContainer>
        </Left>

        <Center>
            <Title>
                Useful Linkes
            </Title>
            <List>
                <ListItem onClick={()=>onRouteChange('home')}  >Home</ListItem>
                <ListItem onClick={()=>onRouteChange('products')}  >Products</ListItem>
                <ListItem onClick={()=>onRouteChange('cart')} >Cart</ListItem>
                {/* <ListItem>Terms</ListItem> */}
               </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
              <Room style={{marginRight: "10px"}} />  A21 Ngozi Avenue, Mufulira
            </ContactItem>
            <ContactItem>
              <Phone style={{marginRight: "10px"}}/> +260969678808
            </ContactItem>
            <ContactItem>
               <MailOutlineOutlined style={{marginRight: "10px"}}/> izukanjisinkolongo@gmail.com
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer