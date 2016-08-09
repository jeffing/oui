import React from 'react';

import ImageIcon16 from 'oui-icons/src/16/image-16.svg';
import ImageIcon24 from 'oui-icons/src/24/image-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const ImageIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = ImageIcon16;
      break;
    case 24:
      Svg = ImageIcon24;
      break;
    default:
  }

  return (
    <Svg
      className="oui-icon display--inline"
      data-test-section={ props.testSection }
    />
  );
};

ImageIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default ImageIcon;

