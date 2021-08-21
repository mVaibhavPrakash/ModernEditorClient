const submitData = (e, Input, setInput, isEdit, setEdit) => {
  e.preventDefault();
  if (Input !== '') {
    if (localStorage.getItem('data') !== null) {
      if (!isEdit)
        localStorage.setItem(
          'data',
          localStorage.getItem('data').concat(Input, '\n')
        );
      else {
        localStorage.setItem('data', Input);
        setEdit(false);
      }
    } else {
      let data = Input.concat('\n');
      localStorage.setItem('data', data);
    }
    setInput('');
  }
};

export default submitData;
