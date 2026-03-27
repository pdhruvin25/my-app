import React from 'react'
import CV from "../../Dhruvin_Patel.pdf"


const Info = () => {
  return (
    <div className='Info'>
<a href= {CV} className='btn' target = "blank">Open Resume</a>
<a href= "#contact" className='btn'>Lets Talk</a>

    </div>
  )
}

export default Info