const navToggle = (NavRef, SidebarRef, EditRef, EditorDivRef) => {
  if (EditRef.current.className === 'editor') {
    SidebarRef.current.style.display = 'block';
    EditRef.current.className = 'editorActive';
    EditorDivRef.current.style.margin = '0 1.7vw 0 3.3vw';
    NavRef.current.style.width = '65vw';
  } else {
    SidebarRef.current.style.display = 'none';
    EditRef.current.className = 'editor';
    EditorDivRef.current.style.margin = '0 auto';
    NavRef.current.style.width = '100vw';
  }
};

export default navToggle;
