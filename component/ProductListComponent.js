import React from "react";
const ProductListComponent=({product})=>{
    return(
        <ul>
            {ProductList.map((product)=>(
                <li key={product.id}>
                    <div>{product.name}</div>
                    <img src={`/${product.imageUrl}`} alt={product.name} style={{width:}}></img>
                    <div>${product.price.toFixed(2)}</div>
                </li>
            ))}
        </ul>
    )
}