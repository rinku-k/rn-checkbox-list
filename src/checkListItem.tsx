import React from 'react';
import {View, StyleProp, ViewStyle, StyleSheet} from 'react-native';
import CheckBox from './checkbox';
import Touchable from './touchable';
import {ListItem, RenderItem} from './types';

type CheckListItemProps = {
  children?: React.ReactNode;
  item?: ListItem | null;
  style?: StyleProp<ViewStyle>;
  checkboxProp?: React.ComponentProps<typeof CheckBox>['checkboxProp'];
  onPress?: () => void;
  isActive?: boolean;
  theme: string;
  renderItem: RenderItem;
};

const CheckListItem = ({
  children = null,
  item = null,
  style,
  checkboxProp,
  onPress = () => {},
  isActive = false,
  theme,
  renderItem,
}: CheckListItemProps) => {
  const flattenedStyle = StyleSheet.flatten(style) || {};

  return (
    <Touchable
      onPress={onPress}
      style={{
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        ...flattenedStyle,
      }}>
      <CheckBox theme={theme} isActive={isActive} checkboxProp={checkboxProp} />
      {!!item && <View style={{flex: 1}}>{renderItem({item})}</View>}
      {children}
    </Touchable>
  );
};

export default CheckListItem;
