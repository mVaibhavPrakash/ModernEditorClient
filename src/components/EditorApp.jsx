import Editor from './Editor';
import '../css/editorapp.css'
import image from '../../public/img/newgen.png'

const EditorApp = ({img}) =>{
  const imge = img !=='standalone' ? null  : image
  return (
    <>
      <div className='editor-editor-app'>
          <Editor  Image={imge}/>
      </div>
    </>
  )
}

export default EditorApp;
