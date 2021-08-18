const closeModal = (e) => {
  e.preventDefault();
  let modal = document.getElementById('myModal');
  modal.style.display = 'none';
};

export default closeModal;
