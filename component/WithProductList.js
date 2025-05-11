import React from 'react';
export default WithProductList=(WrapperComponent,productList)=>{
    return(
        <div>
            <WrapperComponent productList={productList}/>
        </div>
    )
}