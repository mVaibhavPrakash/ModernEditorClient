import './Blog.css'
const LiGenerator = (props) => {
  console.log(props)
  let array = props.props.children.map((value, key) => {
    if (value.type === 'li') {
      return (
        <li
          className="editor-preview-li"
          key={key}
          style={{
            margin: '0 auto',
            color: '#111111',
            fontSize:'0.47rem',
            fontFamily:'inter',
            lineHeight:'1.8',
            paddingLeft: '1.28571429em',
            textIndent: '-1.28571429em',
            marginBottom:'0.4rem',
            tabSize:'3'
          }}>
          {value.props.children}
        </li>
      );
    }
  });

  return array;
};

export default LiGenerator;
