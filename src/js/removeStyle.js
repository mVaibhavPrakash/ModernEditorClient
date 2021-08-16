const removeStyle = () => {
  let array = document.getElementsByClassName('token');

  for (let i = 0; i < array.length; i++) {
    array[i].removeStyle.background = rgba(0, 0, 0, 1.0);
  }
};

export default removeStyle;
