const markdownEdit = (e, text, selected, Input, setInput) => {
  e.preventDefault()

  if (Input) {
    let oldString = Input
    let newString
    if (text === 'bold-btn') {
      newString = '**' + selected.input + '**'
    }
    if (text === 'italic-btn') {
      newString = '*' + selected.input + '*'
    }
    if (text === 'head-btn') {
      newString = '\n' + '#' + ' ' + selected.input
    }
    if (text === 'code-btn') {
      newString = '\n' + '~~~' + 'js' + '\n' + selected.input + '\n' + '~~~'
    }
    if (text === 'ul-btn') {
      newString = '\n' + '*' + ' ' + selected.input
    }
    if (text === 'block-btn') {
      newString = '> ' + selected.input + '\n'
    }
    if (text === 'link-btn' || text === 'image-btn') {
      let array = selected.input.split(' ')
      let last = array.pop()
      let input = '[' + array.join(' ') + ']'
      input = input + '(' + last + ')'
      if (text === 'image-btn') {
        input = '!' + input
      }
      newString = input
    }
    setInput(
      oldString.substring(0, selected.start) +
        newString +
        oldString.substring(selected.end + 1, oldString.length)
    )
  }
}

export default markdownEdit
