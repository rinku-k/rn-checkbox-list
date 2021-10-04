import React from 'react';
import { View, Text } from 'react-native';
import CheckBox from './checkbox';
import PropTypes from 'prop-types';
import Touchable from './touchable';

const CheckListHeader = ({
  children,
  text,
  style,
  checkboxProp,
  onPress,
  isActive,
  theme,
}) => (
  <Touchable
    onPress={onPress}
    style={{
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F2F6FC',
      ...style,
    }}>
    <CheckBox theme={theme} isActive={isActive} checkboxProp={checkboxProp} />
    {!!text && (
      <View style={{ flex: 1 }}>
        <Text
          numberOfLines={1}
          style={{ color: '#212121', fontWeight: 'bold', fontSize: 16 }}>
          {text}
        </Text>
      </View>
    )}
    {children}
  </Touchable>
);

CheckListHeader.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
  checkboxProp: PropTypes.object,
  theme: PropTypes.string.isRequired,
};

CheckListHeader.defaultProps = {
  children: null,
  text: '',
  style: {},
  checkboxProp: {},
  onPress: () => {},
};

export default CheckListHeader;
