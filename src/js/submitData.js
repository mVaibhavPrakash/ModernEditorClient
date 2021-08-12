const submitData = (e, Input, setInput) => {
  e.preventDefault();
  if (Input !== '') {
    if (localStorage.getItem('data') !== null) {
      localStorage.setItem('data', localStorage.getItem('data').concat(Input));
    } else localStorage.setItem('data', Input);
    setInput('');
  }
};

export default submitData;
