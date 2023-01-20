import * as yup from 'yup';
import { useFormik } from 'formik';
import {React,useState} from 'react'
import { myCart } from './data';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
  } from '@material-ui/core'
  import styled from 'styled-components'
  import {db} from '../firebase-config'
  import  { collection, getDocs,addDoc } from 'firebase/firestore'
  import {mobileS,mobileL,tablet} from '../resonsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobileS({width: "75%"})}
  ${mobileL({width: "50%"})}
  ${tablet({width: "75%"})}
`;

const Title = styled.h1`
display: flex;
justify-content: center;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`   

  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  
`;

const errorDiv = styled.div`
color:red;
`;

const formValidationSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  address: yup.string().required('Address is required'),
  phoneNumber: yup.string().required('Phone number is required')
});


const MyForm = ({onRouteChange,emptyCart}) => {

  const [open, setOpen] = useState(false);
const [loading, setLoading] = useState(false);

 

const dialog = (title)=>{
  return <Dialog
       open={open}
       onClose={() => setOpen(false)}
       aria-labelledby='dialog-title'
       aria-describedby='dialog-description'>
       <DialogTitle id='dialog-title' style={{textAlign:"center"}} >{title}</DialogTitle>
       <DialogContent style={{textAlign:"center"}} >
       Your order has been placed successfully! You will be contacted later about your delivery.
       </DialogContent>
       <DialogActions style={{ display:"flex",justifyContent:"center"}} >
         <Button onClick={() => goToHome()}>Go To Home</Button>
       </DialogActions>
     </Dialog>
}

const loadingDialog = (title)=>{
 return <Dialog
      open={loading}
      onClose={() => setLoading(false)}
      aria-labelledby='dialog-title'
      aria-describedby='dialog-description'>
      <DialogTitle id='dialog-title' style={{textAlign:"center"}} >{title}</DialogTitle>
      <DialogContent style={{textAlign:"center", padding:"25px"}} >
      Please Wait, Sending Your Order.   
      </DialogContent>
    </Dialog>
}


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      phoneNumber: ''
    },
    validationSchema: formValidationSchema,
    onSubmit: values => {
      // handle form submission here
     createOrder(values);
    }
  });

  const ordersCollectionRef = collection(db,"orders");

  const createOrder = async (values) => {
    const {firstName,lastName,address,phoneNumber} = values;
    setLoading(true);
       await addDoc(ordersCollectionRef, {name: firstName , lastName: lastName, 
       address: address, 
       phoneNumber: phoneNumber, 
       order: myCart,
       timeOrdered: timeOrdered()
      }).then(()=>{
        setLoading(false);
        setOpen(true);
        emptyCart();
    })
  }

  //time ordered
  function timeOrdered() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

  const goToHome = () =>{
    setOpen(false);
    onRouteChange('home');
  } 

  return (
    <Container>
      <Wrapper>
    <Title>MAKE ORDER</Title>
    <form onSubmit={formik.handleSubmit} style={{display:"flex", flexDirection:"column"}}>
      <label htmlFor="firstName">First Name</label>
      <Input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName && formik.touched.firstName && (
        <div style={{color:"red", fontSize:"12px"}} >{formik.errors.firstName}</div>
      )}

      <label htmlFor="lastName">Last Name</label>
      <Input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName && formik.touched.lastName && (
        <div style={{color:"red", fontSize:"12px"}} >{formik.errors.lastName}</div>
      )}

      <label htmlFor="address">Address</label>
      <Input
        id="address"
        name="address"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.address}
      />
      {formik.errors.address && formik.touched.address && (
        <div style={{color:"red", fontSize:"12px"}} >{formik.errors.address}</div>
      )}

      <label htmlFor="phoneNumber">Phone Number</label>
      <Input
        id="phoneNumber"
        name="phoneNumber"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
      />
      {formik.errors.phoneNumber && formik.touched.phoneNumber && (
        <div style={{color:"red", fontSize:"12px"}} >{formik.errors.phoneNumber}</div>
      )}
      <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
             <Button >SUBMIT</Button>
          </div>
          {loadingDialog("Making Order")}
          {dialog("Order Made Successfully ")}
    </form>
    </Wrapper>
    </Container>
  );
}

export default MyForm;
