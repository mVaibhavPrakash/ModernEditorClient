const LiGenerator = (props) => {
  let array = props.children.map((value, key) => {
    if (value.type === 'li') {
      return (
        <li
          className="preview-li"
          key={key}
          style={{
            paddingLeft: '0',
            margin: '0.25rem 0 0.25rem 0',
            color: '#111111',
            wordBreak: 'break-all',
          }}>
          {value.props.children}
        </li>
      );
    }
  });

  return array;
};

export default LiGenerator;
