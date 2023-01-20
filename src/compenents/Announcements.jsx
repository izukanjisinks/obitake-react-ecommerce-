import React from 'react';
import styled from 'styled-components';
import { announcement } from '../pages/data';
import {mobileS,mobileL,tablet} from '../resonsive'

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-weigth: 500;
font-size: 18px;
${mobileL({ fontSize: "12px"})}
${tablet({ fontSize: "12px"})}
`;

const Announcements = ({announcement}) => {
  // let announcementPresent = announcement[0]['announcement'].length === 0;
  
   //console.log(announcement.log)

 if(announcement.length === 0){
  return(
    <div></div>
   );
 }else{
  return (
    <Container>
       {announcement}
    </Container>
  )
 }
  
}

export default Announcements