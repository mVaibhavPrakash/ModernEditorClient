const submitData = (e, Input, setInput, isEdit, setEdit) => {
  e.preventDefault();
  if (Input !== '') {
    if (localStorage.getItem('data') !== null) {
      if (!isEdit)
        localStorage.setItem(
          'data',
          localStorage.getItem('data').concat(Input)
        );
      else {
        localStorage.setItem('data', Input);
        setEdit(false);
      }
    } else {
      localStorage.setItem('data', Input);
    }
    setInput(' ');
  }
};

export default submitData;
