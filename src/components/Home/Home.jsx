import React from 'react';
import TexthoverEffect from '../animations/TexthoverEffect'
const Home = () => {
     return (
          <section className=' w-[71vw]  mx-auto my-auto mt-2 flex items-center justify-between px-16 py-10 '>
               <div className='left p-4 flex flex-col text-left gap-9 mt-14 '>
                    <div>
                         <p className=' mt-6 pl-1 text-xl text-gray-700 font-Inter '>Hi, my name is,</p>
                         {/* <h2 className='text-7xl text-gray-600 font-semiwbold '>Ranjeet Patel</h2> */}
                         <h2 className='text-7xl text-gray-600 font-semibold'>
                              <TexthoverEffect text="Ranjeet   Patel" />
                         </h2>

                         {/* <h2 id='myName' className='text-7xl font-semibold'>Ranjeet Patel</h2> */}
                         <span className='text-lg text-gray-600 font-Karla font-semibold'>Fullstack Engineer</span>
                    </div>
                    <div className=''>
                         <p className='w-[75%] text-base  font-Inter  text-gray-700'>
                              A passionate web developer focused on building interactive and responsive web experiences.
                         </p>
                    </div>
                    <div>
                         <button className=" border border-[#ff7700] hover:border-2  transition-all duration-400 text-gray-700 font-semibold font-Karla py-1 px-4 rounded inline-flex items-center text-sm shadow-sm">
                              <span>Resume</span>
                         </button>
                    </div>
               </div>
               <div className='right   absolute left-[70%] -z-50 '>
                    {/* Optional: You can add your image here if needed */}
                    <p className="font-dancing text-3xl text-gray-500 transform rotate-[-20deg]">
                         "Crafting code"
                    </p>
               </div>
          </section>
     );
}

export default Home;
