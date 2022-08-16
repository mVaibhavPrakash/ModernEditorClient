import { decrypt, encrypt } from './hash'

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
    const dat = encrypt(Input)
    console.log(dat)
    console.log(decrypt(dat))
    setInput('')
  }
}

export default submitData
