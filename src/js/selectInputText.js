const selectInputText = (e, setSelected, Input) => {
  var start = e.target.selectionStart;
  var end = e.target.selectionEnd;
  setSelected({ start, end, input: Input.substring(start, end) });
};

export default selectInputText;
