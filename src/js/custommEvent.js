const customEvent = () => {
  const undoEvent = new Event('undo');
  console.log(undoEvent);
  document.getElementById('editor-input').addEventListener('undo', (e) => {
    document.execCommand('undo', false, null);
  });

  const redoEvent = new Event('redo');
  document.getElementById('editor-input').addEventListener('redo', (e) => {
    document.getElementById('editor-input');
  });
  return { undoEvent, redoEvent };
};
export default customEvent;
