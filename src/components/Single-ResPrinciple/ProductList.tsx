//this is for single res principle

import { Product } from "../../types/Product";
import ProductCard from "./ProductCard";

type ProductListProps={
    products: Product[];
}

export default function ProductList({products}:ProductListProps){
    return (
        <div>
        {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    )
}