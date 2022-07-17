const previewFull = (
  isFullSize,
  setFullSize,
  previewRef,
  NavRef,
  EditRef,
  EditorDivRef
) => {
  if (!isFullSize) {
    previewRef.current.style.maxWidth = '100vw'
    previewRef.current.style.width = '100vw'
    NavRef.current.style.display = 'none'
    EditRef.current.style.display = 'none'
    EditorDivRef.current.style.display = 'none'
    setFullSize(!isFullSize)
  } else {
    previewRef.current.style.maxWidth = '65vw'
    NavRef.current.style.display = 'block'
    EditRef.current.style.display = 'block'
    EditorDivRef.current.style.display = 'block'
    setFullSize(!isFullSize)
  }
}

export default previewFull
