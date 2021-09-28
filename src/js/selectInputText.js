const selectInputText = (e, selected, setSelected, Input, setInput) => {
  e.preventDefault();
  if (Input) {
    var start = e.target.selectionStart;
    var end = e.target.selectionEnd;
    if (start !== end) {
      let oldString = Input;
      setSelected({ start, end, input: oldString.substr(start, end + 1) });
    }
  }
};

export default selectInputText;
