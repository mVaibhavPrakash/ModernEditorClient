const showPreview = (e, state, setState, Input) => {
  e.preventDefault();
  let modal = document.getElementById('myModal');
  let data = localStorage.getItem('data');
  if (data) {
    modal.style.display = 'block';
    if (state === 1) setState(0);
    else setState(1);
  }
};

export default showPreview;
