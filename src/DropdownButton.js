import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';
import splitComponentProps from './utils/splitComponentProps';

const propTypes = {
  ...Dropdown.propTypes,

  // Toggle props.
  variant: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.node.isRequired,
  noCaret: PropTypes.bool,

  // Override generated docs from <Dropdown>.
  /**
   * @private
   */
  children: PropTypes.node
};

class DropdownButton extends React.Component {
  render() {
    const { size, variant, title, children, ...props } = this.props;

    const [dropdownProps, toggleProps] = splitComponentProps(
      props,
      Dropdown.ControlledComponent
    );

    return (
      <Dropdown {...dropdownProps}>
        <Dropdown.Toggle {...toggleProps} size={size} variant={variant}>
          {title}
        </Dropdown.Toggle>

        <Dropdown.Menu>{children}</Dropdown.Menu>
      </Dropdown>
    );
  }
}

DropdownButton.propTypes = propTypes;

export default DropdownButton;
