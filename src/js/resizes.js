const element = document.getElementsByClassName('editor-editor')[0]
const nav = document.getElementsByClassName('editor-nav')[0]
const side = document.getElementsByClassName('editor-preview')[0]
const container = document.getElementById('editor-container')

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
  document.removeEventListener('mousemove', mouseMove)
  document.removeEventListener('mouseup', mouseUp)
}

element.addEventListener('mousedown', mouseDown)
