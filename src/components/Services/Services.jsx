import React from 'react'
import chat from '../../assets/chat.png'
import data from '../../../data/data.json'
import ServiceDesign from './ServiceDesign'
const Services = () => {
  return (
    <div className=' w-full bg-white -my-10'>
        <div className='w-full container mx-auto bg-black h-auto p-10'>
            <div>
                <h1 className=' text-white text-5xl py-5 font-bold text-center'>The services we offer </h1>
            </div>
            <div className='flex p-5 bg-white w-[70%] mx-auto rounded-lg justify-center items-center h-full gap-2'>
            {
                data.map((item,index)=>{
                    return(
                        <ServiceDesign
                    image={chat}
                    content ={item.content}
                    ></ServiceDesign>
                    )
                    
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Services