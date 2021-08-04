const submitData = (e, obj) => {
  e.preventDefault();
  const promise = new Promise((rej, res) => {
    let data = JSON.parse(localStorage.getItem('data'));
    return res(data);
  });
  promise.then((data) => {
    data.push(obj);
    localStorage.setItem('data', JSON.stringify(data));
  });
};

export default submitData;
