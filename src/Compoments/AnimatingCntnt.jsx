import React from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import { useRef } from 'react';
import Marquee from "react-fast-marquee";
import {RiCloseLine} from '@remixicon/react'

function AnimatingCntnt() {
    // gsap.registerPlugin(useGSAP);
    // const container=useRef();

    // // useGSAP(()=>{
    //   const tl=gsap.timeline();
    // tl.from(".imgDiv",{
    //   y:-40,stagger:1,yoyo:true,repeat:-1,yoyoEase:true
    //  })
    // // },{scope :container})
    return (
        <>
            <div className="main w-full" style={{ height: 'calc(100vh - 70px)' }}>
              {/* for mobile */}
              <div className="mobileDevice w-full h-full  sm:hidden">
                  
              <div className="main w-full flex flex-col h-full py-5">
              
                <div className="top">
                  <h1 className='text-4xl font-semibold px-2'>Get Your Next <br /> Idea</h1>
                </div>
                <div className="line w-2 h-full flex flex-col items-center px-4 py-4">
                  <RiCloseLine/>
                  <div className="line  w-full h-full border-l-2 border border-black"></div>
                </div>
                <div className="bottom h-96">
                <h1 className='text-2xl font-medium px-2'>Search for an idea</h1>
                  <p className='w-full  border-b border-b-gray-900 text-xl px-2 py-2'>What do you want to try next? Think of something you’re into—like “easy chicken dinner”—and see what you find.</p>
                  <div className="images flex items-end  mt-[-10px] overflow-hidden">
                      <Marquee pauseOnHover autoFill>
                      <div className="flex items-end gap-5 mt-[-12px]">
                      <img className='w-[100%]   object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-s5Z-_haDR6EmGBV472YmhY2tj1pdfDyohg&s" alt="" />
                      <img className='w-[100%]  object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRxLUbijinl-XlHbihutJ-5a9I1GGCTBdCWQ&s" alt="" />
                      <img className='w-[100%]  object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzPIQOrC8uIGmuqxCnNqJtkIu7JK-Iwp4Og&s" alt="" />
                      <img className='w-[100%]  object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsRiGFpcXzR4KqrKkYkc_Qymlhn_QvnlKj2g&s" alt="" />

                      <img className='w-[100%]  object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSg00tWrx5zmIY4S5c6v4InT0iYiZkNH7vUw&s" alt="" />
                      <img className='w-[100%]  object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJSi7yaQdHOhRSkJO16Qohi0_japiX70irOxQH73JPkMfrbK3RIxE4xqlJ5-9OrV4T-g&usqp=CAU" alt="" />
                      </div>
                      </Marquee>
                  </div>
                </div>
              </div>   

                    {/* <div className="top w-full border-b border-b-blue-800 py-8 bg-red-200">
                     <h2 className='text-3xl font-semibold'>Get Your Next</h2>
                     <h1 className='text-3xl font-semibold'>Week Night Dinner Idea</h1>
                    </div>
                    <div className="mobileAnimatingPics w-full h-40 border border-black mt-[-45px]">
                      <div className="images w-full bg-red-300 flex gap-2 overflow-hidden">
                       <img className='w-[35%]  object-cover' src="https://i.pinimg.com/236x/d3/fb/69/d3fb6973cddc1d875dc7c2e04525d2e7.jpg" alt="" />
                       <img className='w-[35%]  object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbiA8yiNa-oQpP5DMK7M-cQxLWBWvir0CnA&s" alt="" />
                       <img className='w-[35%]  object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiIpwPETcYq3QO6xjDPm-zeaqH8c9ufgbOHw&s" alt="" />
                       <img src="" alt="" />
                       <img src="" alt="" />
                      </div>
                    </div> */}
            
              </div>
                <div className="hidden sm:block relative w-full h-full AnimContnt sm:flex flex-col items-center justify-between pt-24">
                    <h1 className='text-6xl font-semibold '>Get You Next</h1>
                    <h1 className='absolute top-48 text-6xl font-semibold'>weeknight dinner idea</h1>
                    
                      <div className="AnimatingPics w-full h-full flex gap-5 overflow-hidden">
                      <div className="imgDiv w-[230px] h-full">
                       <img className='container w-full h-[350px] object-cover rounded-[20px]' src="https://i.pinimg.com/236x/d3/fb/69/d3fb6973cddc1d875dc7c2e04525d2e7.jpg" alt="" />
                       <img className='w-full object-cover rounded-[20px] mt-5' src="https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg" alt="" />
                      </div>
                      <div className="imgDiv w-[230px] h-full">
                       <img  className='w-full h-[370px] object-cover rounded-[20px] mt-40' src="https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg" alt="" />
                      </div>
                      <div className="imgDiv w-[230px] h-[350px] ">
                       <img  className='w-full h-full object-cover rounded-[20px] mt-60'  src="https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg" alt="" />
                      </div>
                      <div className="imgDiv w-[230px] h-[350px]">
                       <img  className='w-full h-full object-cover rounded-[20px] mt-96'  src="https://i.pinimg.com/236x/d3/fb/69/d3fb6973cddc1d875dc7c2e04525d2e7.jpg" alt="" />
                      </div>
                      <div className="imgDiv w-[230px] h-[350px] bg-red-200 mt-60">
                       <img  className='w-full h-full object-cover rounded-[20px]'  src="https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg" alt="" />
                      </div>
                      <div className="imgDiv w-[230px] h-full mt-40">
                       <img  className='w-full h-[370px] object-cover rounded-[20px]' src="https://i.pinimg.com/236x/88/05/12/8805128eef83a0d8b724567611ddf7a1.jpg" alt="" />
                      </div>
                      <div className="imgDiv w-[230px] h-full">
                       <img className='w-full h-[350px] object-cover rounded-[20px]' src="https://i.pinimg.com/236x/6a/77/ed/6a77ed2962aa7e66bac8ff727d939e96.jpg" alt="" />
                       <img className='w-full object-cover rounded-[20px] mt-5' src="https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg" alt="" />
                      </div>
                      </div>
                      
                </div>
            </div>
        </>
    )
}

export default AnimatingCntnt
