const closeModal = (e, ModalRef) => {
  e.preventDefault();
  ModalRef.current.style.display = 'none';
};

export default closeModal;
