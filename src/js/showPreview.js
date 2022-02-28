const showPreview = (e, ModalRef, state, setState, Input) => {
  e.preventDefault()
  let data = localStorage.getItem('data')
  if (data) {
    ModalRef.current.style.display = 'block'
    if (state) setState(false)
    else setState(true)
  }
}

export default showPreview
