import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 260,
    title: "My First Book",
    description: "The first book I ever Wrote",
  },
  {
    id: "p2",
    price: 550,
    title: "My Second Book",
    description: "The second book I ever Wrote",
  },
    {
    id: "p3",
    price: 320,
    title: "My Third Book",
    description: "The Third book I ever Wrote",
  },
    {
    id: "p4",
    price: 255,
    title: "My Fourth Book",
    description: "The Fourth book I ever Wrote",
  },
    {
    id: "p5",
    price: 510,
    title: "My Fifth Book",
    description: "The Fifth book I ever Wrote",
  },
   
];

const Products = (props) => {
  return (
    <>
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
    <div className={classes.develop}>
       <h3> Made by ❤️ - Mohammad Amir | Frontend Developer </h3>
    </div >
</>
  );
};

export default Products;
