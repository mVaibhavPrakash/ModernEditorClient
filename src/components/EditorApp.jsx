import { useEffect } from 'react';
import Editor from './Editor';
import '../css/editorapp.css'

const EditorApp = ({footerRef,img}) =>{
  useEffect(() =>{
  footerRef.current.style.display='none'
  return() =>{
    console.log('hmmmm')
      footerRef.current.style.display='block'
  }
},[])
  return (
      <div className='editor-editor-app'>
          <Editor footerRef={footerRef} Image={img}/>
      </div>
  )
}

export default EditorApp;
