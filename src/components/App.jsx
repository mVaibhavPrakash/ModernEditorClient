import {Suspense, useRef,lazy} from 'react'
import {Routes,Route} from 'react-router-dom'
import Spinner from './Spinner';
const EditorApp = lazy(() => import('./EditorApp'))

const App = () => {
  const footerRef= useRef(null)
  return (
    <>
      <Suspense fallback={<Spinner/>}>
          <Routes>
              <Route path='/' element={<EditorApp/>}/>
          </Routes>
      </Suspense>
    </>
  )
}

export default App