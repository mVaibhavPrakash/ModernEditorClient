import { useEffect } from 'react';
import Editor from './Editor';
import '../css/editorapp.css'

const EditorApp = ({footerRef,img}) =>{
  useEffect(() =>{
    if(footerRef?.current){
      footerRef.current.style.display='none'
    }
  return() =>{
    if(footerRef?.current){
      footerRef.current.style.display='block'
    }
  }
},[])
  return (
      <div className='editor-editor-app'>
          <Editor footerRef={footerRef} Image={img}/>
      </div>
  )
}

export default EditorApp;
