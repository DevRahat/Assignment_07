import { useEffect, useState } from 'react'

import './App.css'
import SingleProduct from './SingleProduct';
import { ToastContainer } from 'react-toastify';

function App() {
  const [products, setProducts]=useState([]);
  const [cart,setCart]=useState([]);
  const [card,setCard]=useState([]);


  useEffect(()=>{
    fetch("./fakeData.json")
    .then(res =>res.json())
    .then(data => setProducts(data));
  },[]);
  const handleCart =(p) =>{
      
      const isExits=cart.find((pd)=> pd.recipe_id==p.recipe_id);
      if(!isExits){
        setCart([...cart,p])
      }
      else{
        alert("Already Exist");
      }
  }

  // const handleCard=(c) =>{
  //   setCard([c]);
  // }
  // console.log(card);

  return (
    <>
      
      <div className='main-container1'>

        {/* NavBar start */}
          <div className='container mx-auto'>
          <div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
<div class="dropdown">
<div class="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal pr-20">
      <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
    </div>
<div class="flex-none gap-2">
    <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto rounded-3xl" />
    </div>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

          </div>
          {/* Navbar ends */}

          {/* Banner start */}
          <div className='Banner-section container mx-auto'>
          <div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold text-white">Discover an exceptional cooking <br />class tailored for you</h1>
      <p class="py-6">Basic Cooking basic hotel Management courses offers here. We provide International level of Hotel Management program all over the world</p>
      <button class="btn bg-green-600 border rounded-3xl">Explore Now</button>
      <button class="btn bg-white ml-5 border rounded-3xl">Our Feedback</button>
    </div>
  </div>
</div>
          </div>
          {/* Banner section ends */}

          {/* Main Body start */}
          <div className='main-container2 container mx-auto'>
          <h2 className='Body-headings text-center font-extrabold'>Our Recipes</h2>
          <p className='body-text text-center'>Have a look to all of our Recipes & chose your's fav one. <br></br> We are always at your service </p>

          <div className='main-container'>
            <div className='cards-container'>

            {
              products.map((pd) =>(<SingleProduct product={pd} handleCart={handleCart }></SingleProduct>
              ))}


          
            </div>
            <div className='cart-container'>
                <h1 className='title text-center text-xl'>Want to cook <span></span> </h1>
                <hr />
                <div className="cart-title text-left text-xl text-gray-400">
                  
                  <h5>
                    Name
                  </h5>
                  <h5>
                    Time
                  </h5>
                  <h5>Calories</h5>
                
                </div>
                <div className="cart-info">
                  {
                    cart.map((item,index) =>(
                      <div className="cart-info2 text-left text-xs">
                        <p>{index+1}</p>
                      <h5>{item.recipe_name}</h5>
                      <h5>{item.preparing_time}</h5>
                      <h5>{item.calories}</h5>
                      
                      <button className="btn bg-green-500 border rounded-full">Preparing</button>
                      
                      
                      </div>
                    ))
                  }
                </div>
                  

                  {/* Currently Cooking */}
                  <div className="cooking-card">
                  <h1 className='title text-center text-xl'>Currently Cooking <span></span> </h1>
                  <hr />
                  <div className='cart-title'>
                  <h5>
                    Name
                  </h5>
                  <h5>
                    Time
                  </h5>
                  <h5>Calories</h5>
                  </div>
                  </div>

            </div>
          </div>
          



          </div>
          {/* main Body ends Here */}




      </div>
      
    </>
  )
}

export default App
