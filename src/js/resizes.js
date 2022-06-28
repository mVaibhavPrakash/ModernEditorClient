const element = document.getElementsByClassName('editor-editor')[0]
const resize = document.getElementsByClassName('resize')
const nav = document.getElementsByClassName('editor-nav')[0]
const side = document.getElementsByClassName('editor-sideBar')[0]

let x = 0
let w = 0

const mouseDown = (e) => {
  x = parseInt(e.clientX, 10)
  const styles = window.getComputedStyle(element)
  w = parseInt(styles.width, 10) * (100 / document.documentElement.clientWidth)
  document.addEventListener('mousemove', mouseMove)
  document.addEventListener('mouseup', mouseUp)
}

const mouseMove = (e) => {
  const dx =
    (parseInt(e.clientX) - x) * (100 / document.documentElement.clientWidth)
  const newWidth = w + dx
  console.log(
    parseInt(element.offsetWidth) * (100 / document.documentElement.clientWidth)
  )
  if (
    parseInt(element.offsetWidth) *
      (100 / document.documentElement.clientWidth) <
    70
  ) {
    element.style.width = `${newWidth}vw`
    for (let i = 0; i < resize.length; i++) {
      resize[i].style.width = `${newWidth}vw`
    }
    if (element.className !== 'editor-editor') nav.style.width = `${newWidth}vw`
    const diff = 95 - newWidth
    side.style.width = `${diff}vw`
  }
}

const mouseUp = (e) => {
  document.removeEventListener('mousemove', mouseMove)
  document.removeEventListener('mouseup', mouseUp)
}

element.addEventListener('mousedown', mouseDown)
