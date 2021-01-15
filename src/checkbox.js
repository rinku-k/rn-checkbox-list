import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';

const CustomCheckBox = ({ checkboxProp, isActive, theme }) => (
  <CheckBox
    value={isActive}
    {...Platform.select({
      ios: {
        tintColor: '#626262',
        onTintColor: theme,
        onCheckColor: '#fff',
        onFillColor: theme
      },
      android: { tintColors: { true: theme, false: '#626262' } }
    })}
    {...checkboxProp}
    style={{
      ...Platform.select({
        ios: { marginRight: 8, marginVertical: 7, height: 18, width: 18 }
      }),
      ...checkboxProp.style
    }}
  />
);

CustomCheckBox.propTypes = {
  checkboxProp: PropTypes.object,
  theme: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

CustomCheckBox.defaultProps = {
  checkboxProp: {},
  isActive: false
};

export default CustomCheckBox;
