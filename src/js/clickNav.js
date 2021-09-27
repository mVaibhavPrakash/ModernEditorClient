const clickNav = () => {
  let element = document.getElementsByClassName('sideBar');
  let ele = document.getElementById('edit');
  let eles = document.getElementsByClassName('editorDiv');
  let e = document.getElementsByClassName('nav');
  if (ele.className === 'editor') {
    element[0].style.display = 'block';
    ele.className = 'editorActive';
    eles[0].style.margin = '0 1.7vw 0 3.3vw';
    e[0].style.width = '65vw';
  } else {
    element[0].style.display = 'none';
    ele.className = 'editor';
    eles[0].style.margin = '0 auto';
    e[0].style.width = '100vw';
  }
};

export default clickNav;
