import React from 'react';

const liGenerator = (props) => {
  let array = props.children.map((value, key) => {
    if (value.type === 'li') {
      return (
        <li className="preview-li" key={key} style={{ paddingLeft: '0vw' }}>
          {value.props.children}
        </li>
      );
    }
  });

  return array;
};

export default liGenerator;
