import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';
import CheckListItem from './checkListItem';
import CheckListHeader from './checkListHeader';

class CheckboxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndexes: props.selectedListItems.map(item => item.id),
      selectedListItems: props.selectedListItems,
    };
    this.selectAllItems = this.selectAllItems.bind(this);
  }

  handleOnChange() {
    this.props.onChange({
      ids: this.state.selectedIndexes,
      items: this.state.selectedListItems,
    });
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
    const { selectedIndexes } = this.state;
    const { listItems } = this.props;
    if (selectedIndexes.length < listItems.length) {
      this.setState(
        {
          selectedIndexes: listItems.map(item => item.id),
          selectedListItems: [...listItems],
        },
        this.handleOnChange,
      );
    } else {
      this.unSelectAllItem();
    }
  }

  selectCurrentItem(data) {
    const {
      selectedIndexes: currentSelectedIds,
      selectedListItems: currentSelectedItems,
    } = this.state;
    const currentSelectedIndex = currentSelectedIds.indexOf(data.id);
    if (currentSelectedIndex > -1) {
      currentSelectedIds.splice(currentSelectedIndex, 1);
      currentSelectedItems.splice(currentSelectedIndex, 1);
    } else {
      currentSelectedIds.push(data.id);
      currentSelectedItems.push(data);
    }
    this.setState(
      {
        selectedIndexes: currentSelectedIds,
        selectedListItems: currentSelectedItems,
      },
      this.handleOnChange,
    );
  }

  render() {
    const {
      listItems,
      headerName,
      listItemStyle,
      checkboxProp,
      headerStyle,
      theme,
      onLoading,
      renderItem,
    } = this.props;
    const { selectedIndexes } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {!!headerName && (
          <CheckListHeader
            theme={theme}
            isActive={
              selectedIndexes.length === listItems.length &&
              listItems.length > 0
            }
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
                isActive={selectedIndexes.indexOf(item.id) > -1}
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

CheckboxList.propTypes = {
  listItems: PropTypes.array,
  selectedListItems: PropTypes.array,
  headerName: PropTypes.string,
  listItemStyle: PropTypes.object,
  checkboxProp: PropTypes.object,
  headerStyle: PropTypes.object,
  onChange: PropTypes.func,
  onLoading: PropTypes.func,
  theme: PropTypes.string,
  renderItem: PropTypes.func,
};

const defaultTextProp = {
  numberOfLines: 1,
  style: {
    fontSize: 14,
    color: '#626262',
  },
};

const defaultHeaderStyle = {
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

CheckboxList.defaultProps = {
  listItems: [],
  selectedListItems: [],
  headerName: '',
  listItemStyle: {},
  checkboxProp: {},
  headerStyle: defaultHeaderStyle,
  onChange: () => {},
  onLoading: () => null,
  theme: '#1A237E',
  renderItem: ({ item }) => <Text {...defaultTextProp}>{item.name}</Text>,
};

export default CheckboxList;
