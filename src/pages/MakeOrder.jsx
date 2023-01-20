// import {React,useState,useEffect} from 'react'
// import styled from 'styled-components'
// import {db} from '../firebase-config'
// import  { collection, getDocs,addDoc } from 'firebase/firestore'
// import { async } from '@firebase/util';
// import { myCart } from './data';
// import {
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogContentText,
//     DialogActions
//   } from '@material-ui/core'


// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";


// const formValidationSchema = yup.object().shape({
//   firstName: yup.string().required('First name is required'),
//   lastName: yup.string().required('Last name is required'),
//   address: yup.string().required('Address is required'),
//   phoneNumber: yup.string().required('Phone number is required')
// });

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
//       center;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 25%;
//   padding: 20px;
//   background-color: white;

// `;

// const Title = styled.h1`
// display: flex;
// justify-content: center;
//   font-size: 24px;
//   font-weight: 300;
//   margin-bottom: 20px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 10px 0;
//   padding: 10px;
// `;

// const Button = styled.button`   

//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   margin-top: 10px;
//   margin-bottom: 10px;
  
// `;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

// const MakeOrder = ({onRouteChange,emptyCart}) => {

//   const [newFirstName, setnewFirstName] = useState("");

//   const [newLastName, setnewLastName] = useState("");

//   const [newAddress, setnewAddress] = useState("");
  

//   const [phoneNumber, setphoneNumber] = useState(0);

//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const ordersCollectionRef = collection(db,"orders")


//     const { register, handleSubmit, errors } = useForm({
//       resolver: yupResolver(schema),
//     });
  
//     const submitForm = (data) => {
//      // data.preventDefault;
//       console.log(data);
//     };

//   const createOrder = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//        await addDoc(ordersCollectionRef, {name: newFirstName + " " + newLastName, 
//        address: newAddress, 
//        phoneNumber: phoneNumber, 
//        order: myCart}).then(()=>{
//         setLoading(false);
//         setOpen(true);
//         emptyCart();
//     })
//   }

//   const goToHome = () =>{
//     setOpen(false);
//     onRouteChange('home');
//   }   


// const dialog = (title)=>{
//      return <Dialog
//           open={open}
//           onClose={() => setOpen(false)}
//           aria-labelledby='dialog-title'
//           aria-describedby='dialog-description'>
//           <DialogTitle id='dialog-title' style={{textAlign:"center"}} >{title}</DialogTitle>
//           <DialogContent style={{textAlign:"center"}} >
//           Your order has been placed successfully! You will be contacted later about your delivery.
//           </DialogContent>
//           <DialogActions style={{ display:"flex",justifyContent:"center"}} >
//             <Button onClick={() => goToHome()}>Go To Home</Button>
//           </DialogActions>
//         </Dialog>
// }

// const loadingDialog = (title)=>{
//     return <Dialog
//          open={loading}
//          onClose={() => setLoading(false)}
//          aria-labelledby='dialog-title'
//          aria-describedby='dialog-description'>
//          <DialogTitle id='dialog-title' style={{textAlign:"center"}} >{title}</DialogTitle>
//          <DialogContent style={{textAlign:"center", padding:"25px"}} >
//          Please Wait, Sending Your Order.   
//          </DialogContent>
//        </Dialog>
// }

// const formik = useFormik({
//   initialValues: {
//     firstName: '',
//     lastName: '',
//     address: '',
//     phoneNumber: ''
//   },
//   validationSchema: formValidationSchema,
//   onSubmit: values => {
//     // handle form submission here
//   }
// });

//   return (
//     <Container>
//       <Wrapper>
//         <Title>MAKE ORDER</Title>
//         <Form onSubmit={handleSubmit(submitForm)}>
//           <Input name="firstName" placeholder="firstName" onChange={(event)=>{setnewFirstName(event.target.value)}}  {...register("firstName")}/>
//           {/* <p>  {errors.firstName?.message} </p> */}
//           <Input name="lastName" placeholder="lastName" onChange={(event)=>{setnewLastName(event.target.value)}} {...register("lastName")} />
//         {/* <p> {errors.lastName?.message}</p> */}
//           <Input name="address" placeholder="address" onChange={(event)=>{setnewAddress(event.target.value)}} {...register("address")} />
//           {/* <p> {errors.address?.message}</p> */}
//           <Input name="phoneNumber" placeholder="phoneNumber" onChange={(event)=>{setphoneNumber(event.target.value)}} {...register("phoneNumber")} />
//           {/* <p> {errors.phoneNumber?.message} </p> */}
//           <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
//              <Button >ORDER NOW</Button>
//           </div>
//           {loadingDialog("Making Order")}
//           {dialog("Order Made Successfully ")}
//         </Form>
//       </Wrapper>
//     </Container>
//   );
// }

// export default MakeOrder;