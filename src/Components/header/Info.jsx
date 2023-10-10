import React from 'react'
import CV from "../../Resume_New.pdf"


const Info = () => {
  return (
    <div className='Info'>
<a href= {CV} className='btn' target = "_blank">Open Resume</a>
<a href= "#contact" className='btn'>Lets Talk</a>

    </div>
  )
}

export default Info