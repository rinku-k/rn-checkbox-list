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
  <Touchable onPress={onPress} style={{ ...style }}>
    <CheckBox theme={theme} isActive={isActive} checkboxProp={checkboxProp} />
    {!!text && (
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1} style={{ ...style.text }}>
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
