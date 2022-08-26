const showPreview = (e, ModalRef) => {
  e.preventDefault()
  ModalRef.current.style.display = 'block'
  document.getElementById('root').style.display='none';
  document.getElementsByTagName('body')[0].style.backgroundColor='var(--navy)'
}

export default showPreview
