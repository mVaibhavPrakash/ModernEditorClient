const showPreview = (e, ModalRef, state, setState, Input) => {
  e.preventDefault();
  let data = localStorage.getItem('data');
  if (data) {
    ModalRef.current.style.display = 'block';
    if (state === 1) setState(0);
    else setState(1);
  }
};

export default showPreview;
