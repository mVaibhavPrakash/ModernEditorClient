const createPage = (e, clas, containerRef = null, containerClass = null) => {
  if (clas === e.target.className) {
    if (containerRef) {
      console.log(containerRef);
      containerRef.current.appendChild(createPageElement());
    } else {
      const container = null;
      if (containerClass) {
        container = document.getElementsByClassName(containerClass)[0];
      } else {
        containerClass = e.target.className;
        if (containerClass)
          container = document.getElementsByClassName(containerClass)[0];
      }
      container.appendChild(createPageElement());
    }
  }
};

export const deletePage = (e) => {
  const parent = e.target.parentNode.parentNode;
  parent.removeChild(e.target.parentNode);
};

export const createPageElement = () => {
  const btn = document.createElement('button');
  btn.className = 'page-btn';
  btn.innerText = 'Page';
  const span = document.createElement('button');
  span.className = 'page-btn-close';
  span.innerText = 'X';
  span.addEventListener('click', deletePage);
  btn.appendChild(span);
  return btn;
};

export default createPage;
