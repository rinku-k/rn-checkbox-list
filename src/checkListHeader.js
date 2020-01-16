import React from 'react';
import { View, Text, CheckBox } from 'react-native';
import PropTypes from 'prop-types';
import Touchable from './touchable';

const CheckListHeader = ({ children, text, style, onPress, isActive }) => (
  <Touchable onPress={onPress} style={{ padding: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F2F6FC', ...style }}>
    <CheckBox value={isActive} />
    { !!text &&
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1} style={{ color: '#212121', fontWeight: 'bold', fontSize: 16 }}>{text}</Text>
      </View>
    }
    {children}
  </Touchable>
);

CheckListHeader.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

CheckListHeader.defaultProps = {
  children: null,
  text: '',
  style: {},
  onPress: () => {},
};

export default CheckListHeader;
