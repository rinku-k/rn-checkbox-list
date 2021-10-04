import React from 'react';
import { ColorValue, StyleProp, ViewStyle } from 'react-native';

export interface CheckBoxProps {
  listItems?: listItem[];
  selectedListItems?: listItem[];
  headerName?: string;
  listItemStyle?: StyleProp<ViewStyle>;
  checkboxProp?: object;
  headerStyle?: StyleProp<ViewStyle>;
  onChange?: () => void;
  onLoading?: () => void;
  theme?: StyleProp<ColorValue>;
}

export interface listItem {
  id?: number | string;
  name?: string;
}

export default class CheckBoxList extends React.Component<CheckBoxProps> {}
