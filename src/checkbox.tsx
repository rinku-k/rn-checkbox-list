import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {Platform, StyleSheet} from 'react-native';

type CustomCheckBoxProps = {
  checkboxProp?: Partial<React.ComponentProps<typeof CheckBox>>;
  theme: string;
  isActive?: boolean;
};

const CustomCheckBox = ({
  checkboxProp = {},
  isActive = false,
  theme,
}: CustomCheckBoxProps) => {
  const flattenedStyle = StyleSheet.flatten(checkboxProp.style) || {};

  return (
    <CheckBox
      value={isActive}
      {...Platform.select({
        ios: {
          tintColor: '#626262',
          onTintColor: theme,
          onCheckColor: '#fff',
          onFillColor: theme,
        },
        android: {tintColors: {true: theme, false: '#626262'}},
      })}
      {...checkboxProp}
      style={{
        ...Platform.select({
          ios: {marginRight: 8, marginVertical: 7, height: 18, width: 18},
        }),
        ...flattenedStyle,
      }}
    />
  );
};

export default CustomCheckBox;
