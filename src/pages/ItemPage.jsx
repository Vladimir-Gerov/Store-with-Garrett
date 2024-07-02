// Using useParams HOOK from react-router-dom PACKAGE to manage the dynamic routes in the URL.
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleProduct } from "../lib/fakeStore";
import Card from "../components/Card";

//reuse the same card component here to display a single product
//inside a useEffect call you function to get a single item
//display the info from the item




//  <ul key={product.id}>
//       <h2>{product.title}</h2>
//       <li>{product.description}</li>
//       <li>{product.price}</li>
//       <li><img src={product.image} alt={product.title} /></li>
    
// </ul>

//  useEffect(()=>{
//       getProducts()
//       .then(data => setProducts(data))
//       .catch(error=> console.error(error));
//   }, []);


const ItemPage = () => {
  const [product, setProduct] = useState();
  const {productId} = useParams();

  //useEffect boilerplate
  // useEffect(()=>{}, [])

  useEffect(()=> {

    getSingleProduct(productId)
    .then(data => setProduct(data))
    .catch(error=> console.log(error))
  }, [productId]
)
   
  return   product && 
//   <ul key={product.id}>
//      <h2>{product.title}</h2>
//      <li>{product.description}</li>
//        <li>{product.price}</li>
//        <li><img src={product.image} alt={product.title} /></li>
    
//  </ul>;
(
  <Card
  title={product.title}
        description={product.description}
        price={product.price}
        image={product.image}
  />
)
};

export default ItemPage;
