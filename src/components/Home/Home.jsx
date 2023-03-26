import React from 'react'
import homebg from '../../assets/homebg.gif'
const Home = () => {
  return (
    <div className='bg-white w-full'>
        <div className='bg-black container w-full mx-auto text-white'>
            <div className='flex justify-center items-center w-full'>
                <div className='flex flex-col items-start  px-[10vw] justify-center w-[80%] '>
                <div className='text-5xl w-[100%] '>
                When the mind is at peace, creativity flourishes.
                </div>
                <div className='text-xl py-5'>
                    <p>Finding Inner Peace:</p>
                    <p>Fitness, Meditation, and Psychological Conditioning Techniques</p>
                </div>
                <div className='flex gap-2'>
                    <button className='bg-white transition ease-in-out delay-50 hover:-translate-y-2 text-black w-[10rem] h-10 rounded-md font-medium'>
                      Get Fit  
                    </button>
                    <button className='backdrop-blur-sm bg-white/20 transition ease-in-out delay-50 hover:-translate-y-2 text-black w-[10rem] h-10 rounded-md font-medium'>
                        Take a Survey
                    </button>
                </div>
                </div>
                <div className=' w-[40%] -z-1'>
                        <img src={homebg} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home