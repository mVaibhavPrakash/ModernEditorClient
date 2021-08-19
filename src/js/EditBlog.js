const EditBlog = (data, setInput, setEdit) => {
  let modal = document.getElementById('myModal');
  modal.style.display = 'none';
  setEdit(true);
  setInput(data);
};

export default EditBlog;
