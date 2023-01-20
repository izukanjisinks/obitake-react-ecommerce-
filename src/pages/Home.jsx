import {React,useState,useEffect} from 'react'
import Announcements from '../compenents/Announcements'
import Navbar from '../compenents/navbar'
import Slider from '../compenents/Slider'
import Products from '../compenents/Products'
import Footer from '../compenents/Footer'
import { ann, myCart, popularProducts, sliderItems } from './data'
import Cart from './Cart'
import MyForm from './MyForm'
import  { collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase-config'
import styled from 'styled-components';

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {

  const [route,setRoute] = useState('home');
  const [cartCount, setcartCount] = useState(myCart.length);
  const [loading,setLoading] = useState(false); 
  var [products, setproducts] = useState([]);
  var [announcement, setAnnouncement] = useState([]);

  const productsRef = collection(db,'products');

  const announcementRef = collection(db,'announcement');

  useEffect(() => {


    setLoading(true);

    const getProducts = async ()=>{
      const data = await getDocs(productsRef);
      const getAnnouncement = await getDocs(announcementRef);
      getAnnouncement.docs.map((doc) => {
        //push to array that stores announcement
        ann.push({...doc.data(),id: doc.id});
        setAnnouncement(ann[0]["announcement"]);
       });
     data.docs.map((doc) => {
      popularProducts.push({...doc.data(),id: doc.id});
     });
     sliderItems.push(popularProducts[0]);
     sliderItems.push(popularProducts[1]);
     sliderItems.push(popularProducts[2]);
     console.log(sliderItems);
     setproducts(popularProducts);
     setLoading(false);
    } 
    getProducts();
    
  }, []);

const onRouteChange = (routeName) => {
  setRoute(routeName);
  console.log(routeName);
  }

  
  const addToCart = (value) => {
   
    myCart.push(value);
    setcartCount(myCart.length);
    }

  const onSearchChanged = (event) => {
    const value = event.target.value;
    let filteredProducts = [];
    if(value){
      filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(value.toLowerCase());
     });

    setproducts(filteredProducts);
    onRouteChange('products');
    }else{
      setproducts(popularProducts);
    }
    console.log(filteredProducts);
  } 
  
  const emptyCart = ()=> {
    myCart.length = 0;
    setcartCount(myCart.length);
  }

  let component;

  
  if(route === 'home'){

    /*
    I reset the products here to the normal state,i.e popularProducts,
    so that when the user navigates back prodcuts page from cart page
    for example, they can find all the products listed, products are
    reseted if the use clears the search input, if they don't clear it
    and navigate to the next page, products contains the old product(s)
    searched for
    */
    products = popularProducts;
   
      component = 
      <div> 
      <Slider onRouteChange={onRouteChange}/>
      <Footer onRouteChange={onRouteChange}/>
      </div>
    } else if(route === 'products') {
    component = 
        <div>
          <Products addToCart={addToCart} products={products} />
          <Footer onRouteChange={onRouteChange}/>
      </div>
  }else if(route === 'checkout') {
    products = popularProducts;
    component = 
        <div>
          <MyForm onRouteChange={onRouteChange} emptyCart={emptyCart} />
        </div>
  } else{
    products = popularProducts;
    component = 
        <div>
          <Cart addToCart={addToCart} onRouteChange={onRouteChange}/>
          <Footer onRouteChange={onRouteChange}/>
        </div>
  }

if(loading){
  return(
    <LoadingContainer>
      Loading...
    </LoadingContainer>
  )
}else{
  return (
    <div>
      <Announcements announcement={announcement}/>
        <Navbar onRouteChange={onRouteChange} cartNum={cartCount} onSearchChange={onSearchChanged} /> 
        {component}
      </div>
    
  )
}

 
}

export default Home