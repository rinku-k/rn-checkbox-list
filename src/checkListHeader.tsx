import React from 'react';
import {View, Text, StyleProp, ViewStyle, TextStyle, StyleSheet} from 'react-native';
import CheckBox from './checkbox';
import Touchable from './touchable';

type HeaderStyle = StyleProp<ViewStyle> & {text?: TextStyle};

type CheckListHeaderProps = {
  children?: React.ReactNode;
  text?: string;
  style?: HeaderStyle;
  checkboxProp?: React.ComponentProps<typeof CheckBox>['checkboxProp'];
  onPress?: () => void;
  isActive?: boolean;
  theme: string;
};

const CheckListHeader = ({
  children = null,
  text = '',
  style,
  checkboxProp,
  onPress = () => {},
  isActive = false,
  theme,
}: CheckListHeaderProps) => {
  const flattenedStyle = StyleSheet.flatten(style) || {};
  const headerTextStyle = (style as {text?: TextStyle})?.text || {};

  return (
    <Touchable onPress={onPress} style={{...flattenedStyle}}>
      <CheckBox theme={theme} isActive={isActive} checkboxProp={checkboxProp} />
      {!!text && (
        <View style={{flex: 1}}>
          <Text numberOfLines={1} style={{...headerTextStyle}}>
            {text}
          </Text>
        </View>
      )}
      {children}
    </Touchable>
  );
};

export default CheckListHeader;
