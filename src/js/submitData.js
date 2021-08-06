const submitData = (e, obj, setInput, setElement, setStyle) => {
  e.preventDefault();
  const promise = new Promise((res, rej) => {
    let data = JSON.parse(localStorage.getItem('data'));
    res(data);
  });
  promise.then((data) => {
    let dat = [];
    if (data === null) {
      dat.push(data);
    } else {
      dat = data;
      dat.push(obj);
    }
    localStorage.setItem('data', JSON.stringify(dat));
  });
  setInput('');
  setElement('');
  setStyle('');
  console.log(obj);
};

export default submitData;
