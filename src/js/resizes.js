const element = document.getElementsByClassName('editor-editor')[0]
const nav = document.getElementsByClassName('editor-nav')[0]
const side = document.getElementsByClassName('editor-preview')[0]
const container = document.getElementById('editor-container')
const blogInput = document.getElementsByClassName('editor-blogInput')[0]

let x = 0
let w = 0

const mouseDown = (e) => {
  console.log(e.offsetX, element.clientWidth)
  if (element.className === 'editor-editor') {
    if (
      e.offsetX > element.clientWidth - 30 &&
      element.clientWidth + 30 > e.offsetX
    ) {
      resize(e)
    } else {
      blogInput.style.cursor = 'auto'
    }
  } else {
    if (
      e.offsetX > element.clientWidth - 110 &&
      element.clientWidth + 50 > e.offsetX
    ) {
      resize(e)
    } else {
      blogInput.style.cursor = 'auto'
    }
  }
}
const mouseMove = (e) => {
  const dx =
    (parseInt(e.clientX) - x) * (100 / document.documentElement.clientWidth)
  let newWidth = w + dx
  element.style.width = `${newWidth}vw`
  if (element.className !== 'editor-editor') {
    nav.style.width = `${newWidth}vw`
    container.style.gridTemplateColumns = `${
      parseInt(element.clientWidth) + 5
    }vw auto`
    side.style.width = `${100 - newWidth}vw`
  }
}

const mouseUp = (e) => {
  blogInput.style.cursor = 'auto'
  document.removeEventListener('mousemove', mouseMove)
  document.removeEventListener('mouseup', mouseUp)
}

const resize = (e) => {
  blogInput.style.cursor = 'w-resize'
  x = parseInt(e.clientX, 10)
  const styles = window.getComputedStyle(element)
  w = parseInt(styles.width, 10) * (100 / document.documentElement.clientWidth)
  document.addEventListener('mousemove', mouseMove)
  document.addEventListener('mouseup', mouseUp)
}

element.addEventListener('mousedown', mouseDown)
