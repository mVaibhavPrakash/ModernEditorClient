const showPreview = (e, state, seState) => {
  e.preventDefault();
  let modal = document.getElementById('myModal');
  let data = localStorage.getItem('data');
  if (data !== null && data !== undefined) modal.style.display = 'block';
  seState(state + 1);
};

export default showPreview;
