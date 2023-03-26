import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white h-[10vh]'>
    <div className='container mx-auto h-[100%] flex flex-col justify-center bg-black'>
        <div className='flex justify-evenly items-center'>
            <div className='text-white text-2xl font-bold'>level<span className='text-yellow-500'>Up</span></div>
            <div className='text-white flex justify-evenly items-center gap-6'>
                <button>Home</button>
                <button>About Us</button>
                <button>Services</button>
                <button>Chat</button>
            </div>
            <div className='text-white flex justify-center gap-3'>
                <button>SignUp</button>
                <button>Login</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Navbar