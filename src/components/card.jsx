

 
// const Card = () => {
//   return;
//   //  <h2>This is the Cards</h2>;
//   <>
//     title={product.title}
//     description={product.description}
//     price={product.price}
//     image={product.image}
//   </>;
// };

const Card = ({ title, description, price, image }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
      <img src={image} alt={title} style={{ maxWidth: "15rem"}} />
    </div>
  );
};

export default Card;
