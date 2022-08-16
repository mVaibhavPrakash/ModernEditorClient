const previewFull = (
  setFullSize,
  previewRef,
  NavRef,
  SidebarRef,
  EditRef,
  EditorDivRef,
  isFullSize
) => {
  if (!isFullSize) {
    if (window.innerWidth < 760) {
      SidebarRef.current.style.display = 'block'
      previewRef.current.style.display = 'block'
    }
    previewRef.current.style.maxWidth = '100vw'
    previewRef.current.style.width = '100vw'
    NavRef.current.style.display = 'none'
    EditRef.current.style.display = 'none'
    EditorDivRef.current.style.display = 'none'
    setFullSize(!isFullSize)
  } else {
    previewRef.current.style.maxWidth = '65vw'
    if (window.innerWidth < 760) SidebarRef.current.style.display = 'none'
    NavRef.current.style.display = 'block'
    EditRef.current.style.display = 'block'
    EditorDivRef.current.style.display = 'block'
    setFullSize(!isFullSize)
  }
}

export default previewFull
