import Editor from './Editor';
import '../css/editorapp.css'

const EditorApp = ({footerRef}) =>{
  return (
    <div className='editor-editor-app'>
        <Editor footerRef={footerRef}/>
    </div>
  )
}

export default EditorApp;
