const closeModal = (e, ModalRef) => {
  e.preventDefault();
  ModalRef.current.style.display = 'none';
  document.getElementById('root').style.display = 'block';
  document.getElementsByTagName('body')[0].style.backgroundColor = 'unset';
};

export default closeModal;
