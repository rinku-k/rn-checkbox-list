import React, {Component} from 'react';
import {View, ScrollView, Text, StyleProp, ViewStyle, TextStyle} from 'react-native';
import CheckListItem from './checkListItem';
import CheckListHeader from './checkListHeader';
import {ListItem, RenderItem} from './types';

type CheckboxListProps = {
  listItems?: ListItem[];
  selectedListItems?: ListItem[];
  headerName?: string;
  listItemStyle?: StyleProp<ViewStyle>;
  checkboxProp?: React.ComponentProps<typeof CheckListItem>['checkboxProp'];
  headerStyle?: StyleProp<ViewStyle> & {text?: TextStyle};
  onChange?: (payload: {ids: Array<ListItem['id']>; items: ListItem[]}) => void;
  onLoading?: () => React.ReactNode;
  theme?: string;
  renderItem?: RenderItem;
};

type CheckboxListState = {
  selectedIndexes: Array<ListItem['id']>;
  selectedListItems: ListItem[];
};

const defaultTextProp = {
  numberOfLines: 1,
  style: {
    fontSize: 14,
    color: '#626262',
  },
} as const;

const defaultHeaderStyle: CheckboxListProps['headerStyle'] = {
  padding: 10,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#F2F6FC',
  text: {
    color: '#212121',
    fontWeight: 'bold',
    fontSize: 16,
  },
};

class CheckboxList extends Component<CheckboxListProps, CheckboxListState> {
  static defaultProps: Required<Pick<CheckboxListProps, 'listItems' | 'selectedListItems' | 'headerName' | 'listItemStyle' | 'checkboxProp' | 'headerStyle' | 'onChange' | 'onLoading' | 'theme' | 'renderItem'>> = {
    listItems: [],
    selectedListItems: [],
    headerName: '',
    listItemStyle: {},
    checkboxProp: {},
    headerStyle: defaultHeaderStyle,
    onChange: () => {},
    onLoading: () => null,
    theme: '#1A237E',
    renderItem: ({item}) => <Text {...defaultTextProp}>{item.name}</Text>,
  };

  constructor(props: CheckboxListProps) {
    super(props);
    this.state = {
      selectedIndexes: (props.selectedListItems ?? []).map(item => item.id ?? ''),
      selectedListItems: props.selectedListItems ?? [],
    };
    this.selectAllItems = this.selectAllItems.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.selectCurrentItem = this.selectCurrentItem.bind(this);
    this.unSelectAllItem = this.unSelectAllItem.bind(this);
  }

  handleOnChange() {
    const {onChange} = this.props;
    if (onChange) {
      onChange({
        ids: this.state.selectedIndexes,
        items: this.state.selectedListItems,
      });
    }
  }

  unSelectAllItem() {
    this.setState(
      {
        selectedIndexes: [],
        selectedListItems: [],
      },
      this.handleOnChange,
    );
  }

  selectAllItems() {
    const {selectedIndexes} = this.state;
    const {listItems = []} = this.props;
    if (selectedIndexes.length < listItems.length) {
      this.setState(
        {
          selectedIndexes: listItems.map(item => item.id ?? ''),
          selectedListItems: [...listItems],
        },
        this.handleOnChange,
      );
    } else {
      this.unSelectAllItem();
    }
  }

  selectCurrentItem(data: ListItem) {
    this.setState(
      ({selectedIndexes, selectedListItems}) => {
        const currentSelectedIds = [...selectedIndexes];
        const currentSelectedItems = [...selectedListItems];
        const currentSelectedIndex = currentSelectedIds.indexOf(data.id ?? '');
        if (currentSelectedIndex > -1) {
          currentSelectedIds.splice(currentSelectedIndex, 1);
          currentSelectedItems.splice(currentSelectedIndex, 1);
        } else {
          currentSelectedIds.push(data.id ?? '');
          currentSelectedItems.push(data);
        }
        return {
          selectedIndexes: currentSelectedIds,
          selectedListItems: currentSelectedItems,
        };
      },
      () => this.handleOnChange(),
    );
  }

  render() {
    const {
      listItems = [],
      headerName,
      listItemStyle,
      checkboxProp,
      headerStyle = defaultHeaderStyle,
      theme = '#1A237E',
      onLoading = () => null,
      renderItem = ({item}) => <Text {...defaultTextProp}>{item.name}</Text>,
    } = this.props;
    const {selectedIndexes} = this.state;
    return (
      <View style={{flex: 1}}>
        {!!headerName && (
          <CheckListHeader
            theme={theme}
            isActive={selectedIndexes.length === listItems.length && listItems.length > 0}
            text={headerName}
            onPress={this.selectAllItems}
            style={headerStyle}
            checkboxProp={checkboxProp}
          />
        )}
        {!listItems.length ? (
          onLoading()
        ) : (
          <ScrollView>
            {listItems.map(item => (
              <CheckListItem
                theme={theme}
                key={`${item.id}`}
                isActive={selectedIndexes.indexOf(item.id ?? '') > -1}
                item={item}
                onPress={() => this.selectCurrentItem(item)}
                checkboxProp={checkboxProp}
                style={listItemStyle}
                renderItem={renderItem}
              />
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}

export default CheckboxList;
