import React, { useEffect, useState } from 'react'
import ExplorePageNav from './ExplorePageNav'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

function ProductOverview() {
  const [product,setProduct]=useState({});
  const [loading,setLoading]=useState(true);
  const {id,images}=useParams();
  
  useEffect(()=>{
    fetchData()
  },[])
  let fetchData=async ()=>{
    try {
      const response=await fetch(`https://dummyjson.com/products/${id}`);
      const json=await response.json();
      setProduct(json);
      setLoading(false)
      console.log(json)
    } catch (error) {
      console.log(error,"hello")
    }
  // console.log(product)
  }
    return (
        <>
            {/* <ExplorePageNav/>        */}
            <Navbar/>
           {
            loading ? <>  <div className='text-center text-black pt-32 sm:pt-20'>
             <button disabled type="button" class="text-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
<svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>
Loading...
</button>
         </div></>: <>
            <section class="overflow-hidden">
  <div class="mx-auto max-w-4/5 px-5 py-10">
    <div class="mx-auto flex flex-wrap items-start lg:w-4/5">
      <img
        alt="Nike Air Max 21A"
        class="h-96 w-full rounded-3xl object-cover lg:h-5/6 lg:w-2/5"
        src={product.images[0]}
      />
      <div class="mt-6 w-full lg:pt-10 lg:mt-0 lg:w-1/2 lg:pl-10">
      <div className='buttons text-end'>
          <button className='bg-[#E9E9E9] px-4 py-3 text-[#111127] rounded-full font-semibold text-lg mr-2'>Visit</button>
          <button className='bg-[#E62E2D] px-4 py-2 text-white rounded-full text-lg font-semibold'>save</button>
      </div>
        <h2 class="text-sm font-semibold tracking-widest text-gray-500">
          Nike
        </h2>
        <h1 class="my-4 text-2xl font-semibold text-black">{product.title}</h1>
        <div class="my-4 flex items-center">
          <span class="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-yellow-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-yellow-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-yellow-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-yellow-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-yellow-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span class="ml-3 inline-block text-xs font-semibold">
              4 Reviews
            </span>
          </span>
        </div>
        <p class="leading-relaxed">
          {product.description}
        </p>
        <div class="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
          <div class="flex items-center">
            <span class="mr-3 text-sm font-semibold">Color</span>
            <button class="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
            <button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
            <button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
          </div>
          <div class="ml-auto flex items-center">
            <span class="mr-3 text-sm font-semibold">Size</span>
            <div class="relative">
              <select class="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                <option>8 UK</option>
                <option>9 UK</option>
                <option>10 UK</option>
              </select>
              <span class="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-down"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="comments py-10">
          <p>Add Comments</p>
          <input  className='w-full h-1/2 p-2 border-4 rounded-full' type="text" placeholder='What will you try next'/>
        </div>
        <div class="flex items-center justify-between">
          <span class="title-font text-xl font-bold text-gray-900">
            ${product.price}
          </span>
          <button
            type="button"
            class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
            </>
           }


        </>   
    )
}

export default ProductOverview
