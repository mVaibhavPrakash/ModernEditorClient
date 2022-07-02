document.onclick = function (event) {
  let modal = document.getElementById('editor-myModal')
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}
