import React from 'react' 
import { Outlet } from 'react-router-dom'
const Educator = () => {
  return (
    <div className=''>Educator Page
      <div className="">
        {<Outlet />}
      </div>
    </div>
    
  )
}

export default Educator