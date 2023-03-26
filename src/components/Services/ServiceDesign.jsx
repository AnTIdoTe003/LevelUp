import React from 'react'

const ServiceDesign = (props) => {
  return (
    <div className='bg-white w-[20rem] shadow-md border-2 rounded-md p-5'>
        <div className='bg-white w-full flex justify-center items-center gap-2'>
            <div className=' bg-slate-400 0 w-[40%] rounded-full shadow-lg'>
                <img src={props.image} alt="" />
                
            </div>
            <div>
            <p className='text-lg'>{props.content}</p>
            <button className='text-xl font-semibold bg-blue-300 rounded-lg w-[7vw] h-[5vh]'>More</button>
            </div>
            
        </div>
    </div>
  )
}

export default ServiceDesign