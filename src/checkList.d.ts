import React from 'react';
import {ColorValue, StyleProp, ViewStyle, TextStyle} from 'react-native';

export type ListItem = {
  id: number | string;
  name?: string;
  [key: string]: unknown;
};

export type RenderItem = (args: {item: ListItem}) => React.ReactNode;

export interface CheckBoxProps {
  listItems?: ListItem[];
  selectedListItems?: ListItem[];
  headerName?: string;
  listItemStyle?: StyleProp<ViewStyle>;
  checkboxProp?: object;
  headerStyle?: StyleProp<ViewStyle> & {text?: TextStyle};
  onChange?: (payload: {ids: Array<ListItem['id']>; items: ListItem[]}) => void;
  onLoading?: () => React.ReactNode;
  theme?: ColorValue;
  renderItem?: RenderItem;
}

export default class CheckBoxList extends React.Component<CheckBoxProps> {}
