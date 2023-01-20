import {React,useState,useEffect} from 'react'
import styled from 'styled-components'
import {db} from '../firebase-config'
import  { collection, getDocs,addDoc } from 'firebase/firestore'
import { async } from '@firebase/util';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {

  // const [newOrder, setnewOrder] = useState("");

  // const [newAddress, setnewAddress] = useState("");

  // const [orders, setorders] = useState([]);

  // const ordersCollectionRef = collection(db,"orders")

  // const createOrder = async () => {
  //      await addDoc(ordersCollectionRef, {name: newOrder, address: newAddress})
  // }

  // useEffect(() => {
  //    const getOrders = async () => {
  //        const data = await getDocs(ordersCollectionRef);
  //       setorders(data.docs.map((doc) => ({...doc.data(),id: doc.id})))
  //    }

  //    getOrders()
  // }, [])

  // return(
  //   <div>
  //     <input placeholder='Name' onChange={(event)=>{setnewOrder(event.target.value)}}/>
  //     <input placeholder='address' onChange={(event)=>{setnewAddress(event.target.value)}}/>
  //     <button onClick={createOrder}>Create Order</button>
  //     {orders.map((order) => {
  //       return <div>
  //         <h1>Order: {order.name}</h1>
  //         <h1>Order: {order.address}</h1>
  //         </div>
  //     })}
  //   </div>
  // )

  return (
    <Container>
        <Wrapper>
            <Title>CREATE ACCOUNT</Title>
            <Form>
                <Input placeholder="name" />
                <Input placeholder="last name" />
                <Input placeholder="email" />
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                {/* <Button>CREATE</Button> */}
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register;