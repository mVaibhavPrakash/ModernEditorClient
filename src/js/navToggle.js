export const navToggle = (
  previewRef,
  NavRef,
  SidebarRef,
  EditRef,
  EditorDivRef,
  isFullSize = false,
  setFullSize = null
) => {
  const container = document.getElementById('editor-container')
  if (isFullSize) {
    previewRef.current.style.maxWidth = '65vw'
    previewRef.current.style.display = 'none'
    NavRef.current.style.display = 'block'
    EditRef.current.style.display = 'block'
    EditorDivRef.current.style.display = 'block'
    EditRef.current.style.width = '65vw'
    NavRef.current.style.width = '65vw'
    NavRef.current.style.maxWidth = '65vw'
  }
  if (EditRef.current.className === 'editor-editor') {
    if (window.innerWidth > 760) {
      previewRef.current.style.display = 'block'
      previewRef.current.style.width = '35vw'
      EditRef.current.className = 'editor-editorActive'
      SidebarRef.current.style.display = 'block'
      EditorDivRef.current.style.margin = '0 1.7vw 0 3.3vw'
      EditRef.current.style.width = '65vw'
      NavRef.current.style.width = '65vw'
      NavRef.current.style.maxWidth = '65vw'
    } else {
      SidebarRef.current.style.display = 'none'
      EditorDivRef.current.style.margin = '0 auto'
      /* Changing property of every element to its origin property after sidebar is toggled*/
      EditRef.current.style.width = '60vw'
      container.style.width = '65vw'
      container.style.gridTemplateColumns = `65vw auto`
      NavRef.current.style.width = '100vw'
      NavRef.current.style.maxWidth = '100vw'
      previewRef.current.style.width = `100vw`
    }
  } else {
    SidebarRef.current.style.display = 'none'
    EditRef.current.className = 'editor-editor'
    EditorDivRef.current.style.margin = '0 auto'
    /* Changing property of every element to its origin property after sidebar is toggled*/
    EditRef.current.style.width = '60vw'
    container.style.width = '65vw'
    container.style.gridTemplateColumns = `65vw auto`
    NavRef.current.style.width = '100vw'
    NavRef.current.style.maxWidth = '100vw'
    previewRef.current.style.width = `35vw`
  }
}
