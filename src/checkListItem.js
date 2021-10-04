import React from 'react';
import { View, Text } from 'react-native';
import CheckBox from './checkbox';
import PropTypes from 'prop-types';
import Touchable from './touchable';

const CheckListItem = ({
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
      ...style,
    }}>
    <CheckBox theme={theme} isActive={isActive} checkboxProp={checkboxProp} />
    {!!text && (
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1} style={{ fontSize: 14, color: '#626262' }}>
          {text}
        </Text>
      </View>
    )}
    {children}
  </Touchable>
);

CheckListItem.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  style: PropTypes.object,
  checkboxProp: PropTypes.object,
  onPress: PropTypes.func,
  theme: PropTypes.string.isRequired,
};

CheckListItem.defaultProps = {
  children: null,
  text: '',
  style: {},
  checkboxProp: {},
  onPress: () => {},
};

export default CheckListItem;
