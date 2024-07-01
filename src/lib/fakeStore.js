
import axios from "axios";
const url = 'https://fakestoreapi.com/products?limit=5';


 const getProducts = async ()=> {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }}



    
const getSingleProduct = async (id)=> {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }}
    //write a second function to get a single product by id
    //use it to fetch a single item in the single item page
    //use useParams to get a reference to the id
    //hint: this function will need to take the id as an argument
    //hint: the url will need to be in backticks, so you can use the id as a dynamic value in it
    // `baseurl/${dynamicpart}`

    export {getProducts, getSingleProduct} 