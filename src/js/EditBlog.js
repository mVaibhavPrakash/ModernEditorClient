const EditBlog = (data, setInput, Input) => {
  let modal = document.getElementById('myModal');
  modal.style.display = 'none';
  setInput(data);
};

export default EditBlog;
