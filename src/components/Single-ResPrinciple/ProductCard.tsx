import { Product } from "../../types/Product";

type ProductCardProps ={
    product:Product;
}

const ProductCard = ({product}:ProductCardProps) => {
  return (
    <div key={product.id}>
    <h2>{product.name}</h2>
    <h2>{product.price}</h2>

    <div>
      <h3>Seller</h3>
      <p>{product.seller}</p>
    </div>
  </div>
  )
}

export default ProductCard
