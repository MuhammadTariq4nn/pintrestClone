import React, { useContext, useEffect, useRef, useState } from 'react'
import {RiSearchLine,RiCloseCircleFill} from '@remixicon/react'
import { json } from 'react-router-dom';
import UserContext from '../contextapi/UserContext';

function ExplorePageNav() {
  let [apiData, setApiData] = useState([]);
  let [searchItem, setSearchItem] = useState("");
  // let [searchedItem, setSearchedItem] = useState("");

  const {setSearchedData}=useContext(UserContext);

  const [hide,setHide]=useState("hidden");
  const [block,setBlock]=useState("block");
    async function fetchdata(){
     try {
      const responce=await fetch('https://dummyjson.com/products');
      const json=await responce.json();
      setApiData(json.products)
     } catch (error) {
      console.log(error);
     }
    }
    useEffect(()=>{
      fetchdata();
    },[])
    let productsname=apiData.filter((product)=>product.category.toLowerCase().startsWith(searchItem))
    const unique={};
    productsname.forEach((item)=>{     
      if(!unique[item.category]){
        unique[item.category]=item;
      }
    })
 const suggestedProducts=Object.values(unique);
 
    
    // const [srchhide,setSrchHide]=useState("block")
    // console.log(hide)
    // const value=useRef({})

    function displySrchItm(e){
        // setHide("hidden")
        // setHide(!hide)
        if (hide==true){
            setHide("hidden");
        }else{
            setHide("block");
        setSearchedData(e.target.value)
    }
    if(searchItem){
      hideSrchItem();
    }
}

function hideSrchItem(){
  if(block==true){ 
    setBlock("block")
  }else{
    setHide("hidden");
}
}

function handleSearch(e){
  setSearchItem(e.target.value);
  // setSearchItem(e.target.innerText);

  // hideSrchItem();
  // setSearchedData(selectedval);
  
}
function displaysearch(e){
  const selected=e.target.innerText;
  setSearchItem(selected)
  // const selectedval=e.target.value
  setSearchedData(selected);
  hideSrchItem()
}
// console.log(searchedItem)
    return (
        <>
            <div className='relative'>
            <nav className='fixed top-0 w-full h-[70px] bg-white px-3 pt-1 sm:p-6 flex justify-between items-center gap-5'>
                  <div className="left flex  gap-2 sm:gap-5 items-center font-semibold text-lg sm:text-base">
                  <div className="profileImg w-[7.7rem] bg-green-100">
                    <img className='object-cover' src="data:image/png;base64,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" alt="" />
                  </div>
                  <h5 className='hidden sm:block hover:bg-[#E9E9E9] px-2 py-1 rounded cursor-pointer'>Watch</h5>
                  <h5 className='hover:bg-[#E9E9E9] px-2 py-1 rounded cursor-pointer text-base'>Explore</h5>
                  </div>
                  <div className='hidden sm:block search w-full sm:flex items-center bg-[#E1E1E1] rounded-full py-1'>
                    <input 
                    value={searchItem}
                    onClick={()=>setHide('block')} 
                    onChange={handleSearch}
                    className='w-full h-10 px-2 rounded-full' type="text" placeholder='Search for easy dinner, fashion etc' 
                    />
                    <RiCloseCircleFill onClick={hideSrchItem} size={26} className='mr-2 hover:cursor-pointer' />
                  </div>
                  <div className="flex items-center justify-center gap-2 font-semibold">
                  <button className='hidden sm:block w-20 text-lg sm:w-24 bg-[#E9E9E9] sm:px-1 py-2 text-[#111127] rounded-full'>Log in</button>
                  <button className='px-2 py-1 sm:w-24 bg-[#E62E2D] sm:px-1 sm:py-2 text-white rounded-full'>Sign up</button>
                  </div>
                 </nav>
                 <nav className='bg-white fixed top-16 serachInput pb-1 shadow-lg shadow-gray-100 w-full h-[50px] px-3 sm:p-6 flex justify-between items-center gap-5 sm:hidden'>
                    <input 
                    onClick={displySrchItm} 
                    value={searchItem} 
                    onChange={handleSearch}
                    className='w-full h-full p-2 border-4 rounded-full' type="text" placeholder='What will you try next'
                      
                    />
                    <button onClick={hideSrchItem} className={`${hide}   text-sm pr-1`}>Cancel</button>
                 </nav>
                 <div  className={`${hide} fixed  top-28 z-10 searchItems px-3 w-full h-screen text-black bg-white sm:top-16 sm:bg-[#2C2B2F]/70`}>
                    <div  className="items  h-96 overflow-hidden px-3 py-6 sm:mx-auto sm:rounded-xl sm:h-96  sm:mr-[230px] sm:mb-20 sm:w-[64%] sm:bg-white">
                     <p className='text-lg'>Suggested Search</p>
                        <ul className='mt-2 flex flex-col gap-3'>
                            {
                              suggestedProducts.map((item)=>{
                                return(<>
                                  <li onClick={displaysearch} className='flex gap-5 items-center hover:cursor-pointer'><RiSearchLine size={16}/>{item.category}</li>
                                </>)
                              })
                            }
                            {/* <li className='flex gap-5 items-center'><RiSearchLine size={16}/> hello2</li>
                            <li className='flex gap-5 items-center'><RiSearchLine size={16}/> hello3</li> */}
                        </ul>
                    </div> 
                 </div>
            </div>
        </>
    )
}
// export {searchInput}
export default ExplorePageNav
