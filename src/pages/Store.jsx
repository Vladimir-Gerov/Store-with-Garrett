// Importing the Card component to use it in the Store component

import Card from "../components/Card";
import GoBack from "../components/GoBack";
import { getProducts } from "../lib/fakeStore";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";



// import { useNavigate } from "react-router-dom";
// const GoBack = () => {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate(-1);
//   };
//   return <button onClick={handleClick}>Go Back</button>;
// };
// export default GoBack;






//replace the ul that's below with your card component, so that a card is rendered for each product,
//that displays the product info-style it a little bit
//wrap each card in a link component so that it takes you to the single item page
//hint: you will need to use backticks to make the to property dynamic, and use the productId

const Store = () => {
  const [products, setProducts] = useState();

  useEffect(()=>{
      getProducts()
      .then(data => setProducts(data))
      .catch(error=> console.error(error));
  }, []);
  return (
    <div>
 
 <h1>Store page!</h1>
 {/* replace this part with your cards */}
 {/* {products && products.map((product)=>{
   return (
    <ul key={product.id}>
      <h2>{product.title}</h2>
      <li>{product.description}</li>
      <li>{product.price}</li>
      <li><img src={product.image} alt={product.title} /></li>
    
</ul>
  )
})} */}


{products && products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card 
            title={product.title} 
            description={product.description} 
            price={product.price} 
            image={product.image} 
          />
        </Link>
      ))}

 
      <GoBack></GoBack>
  </div>
  );
};

export default Store;

