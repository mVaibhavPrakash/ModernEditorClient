import React from 'react'
import './Blog.css'
const Pre = (props) => {
  return (
    <pre id='editor-pre'>{props.children}</pre>
  )
}

export default Pre