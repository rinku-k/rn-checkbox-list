import React from 'react';
import { View, Text, CheckBox } from 'react-native';
import PropTypes from 'prop-types';
import Touchable from './touchable';

const CheckListItem = ({ children, text, style, onPress, isActive }) => (
  <Touchable onPress={onPress} style={{ padding: 10, flexDirection: 'row', alignItems: 'center', ...style }}>
    <CheckBox value={isActive} />
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
  onPress: PropTypes.func,
};

CheckListItem.defaultProps = {
  children: null,
  text: '',
  style: {},
  onPress: () => {},
};

export default CheckListItem;
