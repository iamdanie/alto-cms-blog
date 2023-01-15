import React from 'react'
import './index.css'

function Contact(): React.ReactElement<{}> {
  return (
    <>
      <h1>Contact</h1>
      <h3>Daniela Bravo</h3>
      <div className="contact-info">
        <a href="https://github.com/iamdanie" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/daniela-bravo-572385a1"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </>
  )
}

export default Contact
