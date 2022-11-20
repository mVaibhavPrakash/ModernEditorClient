const Table = (props) => {
    console.log(props.children)
   const array= props.children.map((val,i)=>{
        if(val.type==='thead'){
            return <thead className="editor-table-head">
                {val.props.children}
            </thead>
        }
        if(val.type==='tbody'){
            return <tbody className="editor-table-body">
                {val.props.children}
            </tbody>
        }
    })
  return (
    <table className="editor-table">
        {array}
    </table>
  )
}

export default Table