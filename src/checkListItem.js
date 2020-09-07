import React from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import PropTypes from 'prop-types';
import Touchable from './touchable';

const CheckListItem = ({ children, text, style, checkboxStyle, onPress, isActive, theme }) => (
  <Touchable onPress={onPress} style={{ padding: 10, flexDirection: 'row', alignItems: 'center', ...style }}>
    <CheckBox
      tintColors={{ true: theme, false: '#626262' }}
      tintColor="#626262"
      onTintColor={theme}
      onCheckColor={theme}
      value={isActive}
      {...checkboxStyle}
    />
    { !!text &&
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1} style={{ fontSize: 14, color: '#626262' }}>{text}</Text>
      </View>
    }
    {children}
  </Touchable>
);

CheckListItem.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  style: PropTypes.object,
  checkboxStyle: PropTypes.object,
  onPress: PropTypes.func,
  theme: PropTypes.string.isRequired,
};

CheckListItem.defaultProps = {
  children: null,
  text: '',
  style: {},
  checkboxStyle: {},
  onPress: () => {},
};

export default CheckListItem;
