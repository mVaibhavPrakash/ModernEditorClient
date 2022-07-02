export const navToggle = (NavRef, SidebarRef, EditRef, EditorDivRef) => {
  const container = document.getElementById('editor-container')
  const sideBar = document.getElementsByClassName('editor-sideBar')[0]
  if (EditRef.current.className === 'editor-editor') {
    SidebarRef.current.style.display = 'block'
    EditRef.current.className = 'editor-editorActive'
    EditorDivRef.current.style.margin = '0 1.7vw 0 3.3vw'
    EditRef.current.style.width = '65vw'
    NavRef.current.style.width = '65vw'
    NavRef.current.style.maxWidth = '65vw'
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
    sideBar.style.width = `35vw`
  }
}
