import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen h-16 bg-amber-400 flex p-5 justify-between items-center'>
<div className="logo-right">
    logo
</div>
<div className="menu  ">
    <ul className='lg:flex justify-between items-center gap-20'>
        <li>feature</li>
         <li>Pricing</li>
          <li>About</li>
    </ul>
</div>
<div className="menu-button flex gap-5">
   <button className='bg-blue-600 text-amber-50 p-2 rounded-[20px]'>Login</button>
   <button className='bg-amber-50 border-blue-600 text-blue-600 p-2 rounded'>Start</button>
</div>
    </div>
  )
}

export default Navbar
