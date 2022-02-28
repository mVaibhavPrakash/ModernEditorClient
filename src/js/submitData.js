const submitData = (e, data, Input, setInput, isEdit, setEdit) => {
  e.preventDefault()
  if (Input) {
    if (data !== null) {
      if (!isEdit) localStorage.setItem('data', data.concat(Input))
      else {
        localStorage.setItem('data', Input)
        setEdit(false)
      }
    } else {
      localStorage.setItem('data', Input)
    }
    setInput('')
  }
}

export default submitData
