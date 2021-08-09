const submitData = (
  e,
  Input,
  Element,
  Style,
  setInput,
  setElement,
  setStyle
) => {
  e.preventDefault();
  if (Element !== '' && Input !== '' && Style !== {}) {
    let obj = {
      element: Element,
      input: Input,
      style: Style,
    };
    let data = JSON.parse(localStorage.getItem('data'));
    let dat = [];
    if (data === null) {
      dat.push(obj);
    } else {
      dat = data;
      dat.push(obj);
    }
    localStorage.setItem('data', JSON.stringify(dat));
    setInput('');
    setElement('');
    setStyle('');
  }
};

export default submitData;
