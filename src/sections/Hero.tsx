import React from 'react'
import { githubIcon, instagramIcon, linkedInIcon, mailIcon, mediumIcon } from '../assets/icons'

const Hero = () => {
  return (
    <section>
      <div>
        <h1>Hi, I'm Maureen</h1>
        <p></p>
        <div>
          <button>{mailIcon}</button>
          <button>{linkedInIcon}</button>
          <button>{githubIcon}</button>
          <button>{mediumIcon}</button>
          <button>{instagramIcon}</button>
            {}</div>
      </div>
    </section>
  )
}

export default Hero