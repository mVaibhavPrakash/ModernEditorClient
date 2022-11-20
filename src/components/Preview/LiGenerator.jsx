import './Blog.css'
const LiGenerator = (props) => {
  console.log(props)
  let array = props.props.children.map((value, key) => {
    if (value.type === 'li') {
      return (
        <li
          className="editor-li"
          key={key}>
          {value.props.children}
        </li>
      );
    }
  });

  return array;
};

export default LiGenerator;
