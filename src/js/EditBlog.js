const EditBlog = (ModalRef, data, setInput, setEdit) => {
  ModalRef.current.style.display = 'none';
  setEdit(true);
  setInput(data);
};

export default EditBlog;
