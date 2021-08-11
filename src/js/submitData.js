const submitData = (e, Input, setInput) => {
  e.preventDefault();
  if (Input !== '') {
    localStorage.setItem('data', Input);
    setInput('');
  }
};

export default submitData;
