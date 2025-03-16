//This is for single responsibility principle
//means if we have usequery for fetching then it should be in seperate custom hook

import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/Product";

//this should be in api folder no here
const fetchProducts =async():Promise<Product[]> => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    return data as Product[];

}

//this should be here
export const useFetchProducts =() => {
    return useQuery({
        queryKey:["products"],
        queryFn: fetchProducts
    })
}