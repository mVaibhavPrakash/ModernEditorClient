import React from 'react'
import './Blog.css'
const Pre = (props) => {
  console.log(props.children)
  return (
    <pre id='pre'>{props.children}</pre>
  )
}

export default Pre