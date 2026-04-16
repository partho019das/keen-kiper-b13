import React from 'react';
import Addfrind from './Addfrind';

const Homepage = () => {
    return (
        <div>
           <div className='mt-10 text-center'>
             <h1 className='text-3xl font-bold'>Friends to keep close in your life</h1>
             
             <p className='mt-2 text-[#64748B]'>
               Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
               relationships that matter most.
             </p>

             <button className='bg-[#244D3F] px-3 py-1.5 rounded-[5px] text-white mt-5'>
               + Add Friend
             </button>
           </div>

           {/* Cards section */}
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 px-5 justify-items-center'>

            <div className='shadow-2xl w-40 h-24 flex flex-col justify-center items-center rounded-lg text-center'>
              <h1 className='text-xl font-bold'>10</h1>
              <p className='text-[#64748B] text-sm'>Total Friends</p>
            </div>

            <div className='shadow-2xl w-40 h-24 flex flex-col justify-center items-center rounded-lg text-center'>
              <h1 className='text-xl font-bold'>3</h1>
              <p className='text-[#64748B] text-sm'>On Track</p>
            </div>

            <div className='shadow-2xl w-40 h-24 flex flex-col justify-center items-center rounded-lg text-center'>
              <h1 className='text-xl font-bold'>6</h1>
              <p className='text-[#64748B] text-sm'>Need Attention</p>
            </div>

            <div className='shadow-2xl w-40 h-24 flex flex-col justify-center items-center rounded-lg text-center'>
              <h1 className='text-xl font-bold'>12</h1>
              <p className='text-[#64748B] text-sm'>Interactions</p>
            </div>

           </div>
    <Addfrind></Addfrind>
        </div>
    );
};

export default Homepage;