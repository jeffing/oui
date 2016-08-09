import React from 'react';

import LinkIcon16 from 'oui-icons/src/16/link-16.svg';
import LinkIcon24 from 'oui-icons/src/24/link-24.svg';
/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const LinkIcon = (props) => {
  let Svg;

  switch (props.size) {
    case 16:
      Svg = LinkIcon16;
      break;
    case 24:
      Svg = LinkIcon24;
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

LinkIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([
    16,
    24,
  ]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default LinkIcon;

