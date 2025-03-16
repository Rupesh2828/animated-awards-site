import { useFetchProducts } from "../hooks/useFetchProducts";
import LoadingDisplay from "./Single-ResPrinciple/LoadindDisplay";
import ErrorDisplay from "./Single-ResPrinciple/ErrorDisplay";
import ProductList from "./Single-ResPrinciple/ProductList";

const ProductPage = () => {
  const { data: products, isFetching, error } = useFetchProducts();

  return (
    <div>
      <h1>Products Page</h1>
      {isFetching && <LoadingDisplay />}
      {error && <ErrorDisplay />}
     
      {products && <ProductList products={products}/>}
      
    </div>
  );
};

export default ProductPage;
