import React, { useContext, useEffect, useState } from 'react';
import ExplorePageNav from './ExplorePageNav';
import { Link } from 'react-router-dom';
import UserContext from '../contextapi/UserContext';

function Explore() {
   let [data,setData]=useState([]);
   let [loading,setLoading]=useState(true);
   
   const {searchedData}=useContext(UserContext);
   console.log(searchedData);
// if(!searchedData) return "plz wait"
// return searchedData
// console.log(searchedData)

    useEffect(()=>{
        fetchData();
    },[])  
    let fetchData=async ()=>{
        try {
            const responce=await fetch('https://dummyjson.com/products');
            const json=await responce.json();
            setData(json.products)
            setLoading(false)
            // console.log(json)
        } catch (error) {
            console.log(error)
        }
      }
    
  // console.log(data)
        let result=data.filter((item)=>item.category===searchedData);
        console.log(result)
    return (
        <>
            <ExplorePageNav/>
            {
                loading ? <>  <div className='text-center text-black pt-32 sm:pt-20'>
             <button disabled type="button" class="text-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
<svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>
Loading...
</button>
         </div></>  :<>
              
              <div className="exploreContent w-full h-screen">
              <div className="content px-2 w-full h-full pt-32 py-2 sm:pt-16 h-full">
                <h1 className='px-10 py-1 font-semibold text-xs text-center sm:text-base'>Explore popular ideas</h1>
                <div  className="products w-full h-full flex flex-wrap pl-4 gap-3">
                    {
                        result== "" ? (
                            data.map((product)=>{
                          return(<>
                            
                            <div className="product mt-3 w-[45%] flex flex-col items-start hover:cursor-pointer sm:w-52">
                            <Link key={product.id} to={`/Explore/productOverView/${product.id}`}>
                             <img className='w-full object-cover rounded-2xl' src={product.images[2]} alt="" />
                             <h1 className='font-semibold px-1 text-sm'>{product.title}</h1>
                             <p className='px-1 text-sm leading-5'>{product.description.substring(0,55)}...</p>
                             <div>
                               <div className="profile mt-2 px-1 flex items-center gap-2">
                                <img className='w-8 h-8 rounded-full object-cover' src={product.images[3]} alt="" />
                                <p className='text-xs font-semibold'>{product.brand}</p>
                               </div>
                             </div>
                             </Link>   
                            </div> 
                          </>)
                        })
                        ):(
                            result.map((product)=>{
                          return(
                            loading ? <>  <div className='text-center text-black pt-32 sm:pt-20'>
             <button disabled type="button" class="text-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
<svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>
Loading...
</button>
         </div></>:
                            <>
                            <div className="product  w-[45%] flex flex-col items-start hover:cursor-pointer sm:w-52">
                            <Link key={product.id} to={`/Explore/productOverView/${product.id}`}>
                             <img className='w-full object-cover rounded-2xl' src={product.images[2]} alt="" />
                             <h1 className='font-semibold px-1 text-sm'>{product.title}</h1>
                             <p className='px-1 text-sm leading-5'>{product.description.substring(0,55)}...</p>
                             <div>
                               <div className="profile mt-2 px-1 flex items-center gap-2">
                                <img className='w-8 h-8 rounded-full object-cover' src={product.images[3]} alt="" />
                                <p className='text-xs font-semibold'>{product.brand}</p>
                               </div>
                             </div>
                             </Link>   
                            </div> 
                          </>)
                        })
                        )
                    }
                    
                </div>
              </div>
            </div>
              
                </>
            }
        </>
    )
}

export default Explore













// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://api.example.com/data');
//       const jsonData = await response.json();
//       setData(jsonData);
//       setIsLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>API Data</h1>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {data.map((item, index) => (
//             <li key={index}>{item.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;
