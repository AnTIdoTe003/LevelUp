import React from 'react'
import about from '../../assets/aboutbg.gif'
const About = () => {
  return (
    <div className='bg-white w-full'>
        <div className='container  bg-black mx-auto'>
            <div className='flex justify-center items-center w-full '>
                <div className='w-[200%]'>
                    <img className='w-full' src={about} alt="" />
                </div>
                <div className='text-white flex flex-col justify-center items-center gap-5'>
                    <h1 className='text-5xl font-bold'>
                        About US
                    </h1>
                    <p className='text-xl'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias amet repudiandae animi. Eveniet doloribus maiores culpa incidunt, accusamus totam autem, inventore enim sed in ipsa omnis! Incidunt sed id aut.
                        Deserunt rerum reiciendis temporibus praesentium doloremque nisi sequi quos, accusantium est hic labore animi nam quo odio voluptate minus at eaque architecto placeat in corrupti porro ipsam dolorum voluptas! Distinctio!
                    </p>
                    <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-xl w-[10vw] h-[6vh]">Blue</button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About