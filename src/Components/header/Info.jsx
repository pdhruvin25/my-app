import React from 'react'
import CV from "../../Resume_New.pdf"


const Info = () => {
  return (
    <div className='Info'>
<a href= {CV} download className='btn'>Download Resume</a>
<a href= "#contact" className='btn btn-primary'>Lets Talk</a>

    </div>
  )
}

export default Info