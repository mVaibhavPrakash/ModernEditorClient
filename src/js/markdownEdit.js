const markdownEdit = (
  e,
  text,
  selected,
  setSelected,
  Result,
  setResult,
  InputRef
) => {
  e.preventDefault();
  if (Result && selected.start !== selected.end) {
    let newString = '';
    if (text === 'bold-btn') {
      newString = '**' + selected.input.trim() + '**';
    }
    if (text === 'italic-btn') {
      newString = '*' + selected.input.trim() + '*';
    }
    if (text === 'head-btn') {
      newString = '\n' + '#' + ' ' + selected.input.trim();
    }
    if (text === 'code-btn') {
      newString =
        '\n' + '~~~' + 'js' + '\n' + selected.input.trim() + '\n' + '~~~';
    }
    if (text === 'ul-btn') {
      newString = '\n' + '*' + ' ' + selected.input.trim();
    }
    if (text === 'block-btn') {
      newString = '> ' + selected.input.trim() + '\n';
    }
    if (text === 'link-btn' || text === 'image-btn') {
      let array = selected.input.trim().split(' ');
      let last = array.pop();
      let input = '[' + array.join(' ') + ']';
      input = input + '(' + last + ')';
      if (text === 'image-btn') {
        input = '!' + input;
      }
      newString = input;
    }
    setResult(
      Result.substring(0, selected.start) +
        newString +
        Result.substring(selected.end, Result.length)
    );
    InputRef.current.value =
      Result.substring(0, selected.start) +
      newString +
      Result.substring(selected.end, Result.length);
  }
  if (text === 'table-btn') {
    let newString =
      '\n' +
      `| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| left text   | middle-text | right text    |` +
      '\n';

    setResult(
      Result.substring(0, selected.start) +
        newString +
        Result.substring(selected.end, Result.length)
    );
    InputRef.current.value =
      Result.substring(0, selected.start) +
      newString +
      Result.substring(selected.end, Result.length);
  }
  setSelected('');
};

export default markdownEdit;
