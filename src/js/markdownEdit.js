const markdownEdit = (e, selected, setSelected, Input, setInput) => {
  e.preventDefault();
  let oldString = Input;
  let newString;
  let text = e.target.id;
  if (text === 'bold-btn') {
    newString = '**' + selected.input + '**';
  }
  if (text === 'italic-btn') {
    newString = '*' + selected.input + '*';
  }
  if (text === 'head-btn') {
    newString = '\n' + '#' + ' ' + selected.input;
  }

  setInput(
    oldString.substr(0, selected.start) +
      newString +
      oldString.substr(selected.end + 1, oldString.length)
  );
};

export default markdownEdit;
