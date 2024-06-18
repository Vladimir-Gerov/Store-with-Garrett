
// Using useParams HOOK from react-router-dom PACKAGE to manage the dynamic routes in the URL.
import { useParams } from "react-router-dom";

const ItemPage = () => {
const {productid} = useParams()
  return (<h1>This is the Item page.{productid}</h1>)
};

export default ItemPage;
