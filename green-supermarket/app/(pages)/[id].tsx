// import { useRouter } from 'next/router';
// import ProductDetails from './products_details/page';
// import Products from './shop/Products'; // Import your product data

// interface ProductDetailsProps {
//     id: number; // Assuming id is of any type
//     name: string;
//     image: string; // Assuming image is of any type
//     price: number;
//     description: string;
//   }

// const ProductPage = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   // Find the product with the matching ID
//  const product = Products.find((p) => p.id === parseInt(id as string));

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   return (

//  <ProductDetails
//  id={product.id}
//  name={product.name}
//  image={product.image}
//  price={product.price}
//  description={product.description}
//  />
 
//     // <Page id = {product.id}
//     // name={product.name}
//     // image={product.image}
//     // price={product.price} />
//   );
// };

// export default ProductPage;
