import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import PropTypes from 'prop-types';

const CustomCheckBox = ({ checkboxProp, isActive, theme }) => (
  <CheckBox
    tintColors={{ true: theme, false: '#626262' }}
    tintColor="#626262"
    onTintColor={theme}
    onCheckColor={theme}
    value={isActive}
    {...checkboxProp}
  />
);

CustomCheckBox.propTypes = {
  checkboxProp: PropTypes.object,
  theme: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

CustomCheckBox.defaultProps = {
  checkboxProp: {},
  isActive: false,
};

export default CustomCheckBox;
