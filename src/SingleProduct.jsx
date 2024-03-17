import React from 'react';

const SingleProduct = ({product, handleCart }) => {
    console.log(handleCart);
    return (
        <div className='container mx-auto'>
            <div class="card w-96 bg-base-100 shadow-xl text-start ">
                <figure class="px-10 pt-10">
                <img src={product.recipe_image} alt="Shoes" class="rounded-xl" />
                </figure>
            <div class="card-body  text-left text-gray-500">
            <h2 class="card-title">{product.recipe_name}</h2>
            <p>{product.short_description}</p>
             <hr />
             <div className='Ingredients'>
                 <ol className='text-left'>
                    <h4>Ingredients: 6</h4>
                     <li>1</li>
                 </ol>
                </div>
        <div className='time flex gap-4 text-gray-500 text-left'>
            <p>{product.preparing_time}</p>
            <p>{product.calories}</p>
        </div>

    <div class="card-actions">
      <button onClick={(e) =>handleCart(product)} class="btn bg-green-500 text-black border rounded-full">Cook Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleProduct;