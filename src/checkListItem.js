import React from 'react';
import { View } from 'react-native';
import CheckBox from './checkbox';
import PropTypes from 'prop-types';
import Touchable from './touchable';

const CheckListItem = ({
  children,
  item,
  style,
  checkboxProp,
  onPress,
  isActive,
  theme,
  renderItem,
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
    {!!item && <View style={{ flex: 1 }}>{renderItem({ item: item })}</View>}
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
  item: null,
  style: {},
  checkboxProp: {},
  onPress: () => {},
};

export default CheckListItem;
