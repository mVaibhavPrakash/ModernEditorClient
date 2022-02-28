import { useEffect,useContext, RefObject } from 'react';
import Editor from './Editor';
import '../css/editorapp.css'

const EditorApp = ({footerRef}) =>{
  useEffect(() =>{
    return () => {
      if(footerRef !== null && footerRef.current)
        footerRef.current.style.width='100vw'
      }
  })
  return (
    <div className='editor-editor-app'>
        <Editor footerRef={footerRef}/>
    </div>
  )
}

export default EditorApp;
