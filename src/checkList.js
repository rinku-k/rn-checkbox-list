import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
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

  shouldComponentUpdate(nextProps, nextState) {
    this.props.onChange({
      ids: nextState.selectedIndexes,
      items: nextState.selectedListItems,
    });
    return true;
  }

  unSelectAllItem() {
    this.setState({
      selectedIndexes: [],
      selectedListItems: [],
    });
  }

  selectAllItems() {
    const { selectedIndexes } = this.state;
    const { listItems } = this.props;
    if (selectedIndexes.length < listItems.length) {
      this.setState({
        selectedIndexes: listItems.map(item => item.id),
        selectedListItems: [...listItems],
      });
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
    this.setState({
      selectedIndexes: currentSelectedIds,
      selectedListItems: currentSelectedItems,
    });
  }

  render() {
    const {
      listItems,
      headerName,
      listItemStyle,
      checkboxProp,
      textProp,
      headerStyle,
      theme,
      onLoading,
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
            {listItems.map(data => (
              <CheckListItem
                theme={theme}
                key={`${data.id}`}
                isActive={selectedIndexes.indexOf(data.id) > -1}
                text={data.name}
                onPress={() => this.selectCurrentItem(data)}
                checkboxProp={checkboxProp}
                textProp={textProp}
                style={listItemStyle}
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
  textProp: PropTypes.object,
  headerStyle: PropTypes.object,
  onChange: PropTypes.func,
  onLoading: PropTypes.func,
  theme: PropTypes.string,
};

CheckboxList.defaultProps = {
  listItems: [],
  selectedListItems: [],
  headerName: '',
  listItemStyle: {},
  checkboxProp: {},
  textProp: {
    numberOfLines: 1,
    style: {
      fontSize: 14,
      color: '#626262',
    },
  },
  headerStyle: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F6FC',
    text: {
      color: '#212121',
      fontWeight: 'bold',
      fontSize: 16,
    },
  },
  onChange: () => {},
  onLoading: () => null,
  theme: '#1A237E',
};

export default CheckboxList;
