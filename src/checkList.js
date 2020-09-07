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
    this.props.onChange({ ids: nextState.selectedIndexes, items: nextState.selectedListItems });
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
        selectedListItems: listItems,
      });
    } else {
      this.unSelectAllItem();
    }
  }

  selectCurrentItem(data) {
    const { selectedIndexes, selectedListItems } = this.state;
    const currentHeaderIds = selectedIndexes;
    const currentHeaderItems = selectedListItems;
    const currentSelectedIndex = currentHeaderIds.indexOf(data.id);
    if (currentSelectedIndex > -1) {
      currentHeaderIds.splice(currentSelectedIndex, 1);
      currentHeaderItems.splice(currentSelectedIndex, 1);
    } else {
      currentHeaderIds.push(data.id);
      currentHeaderItems.push(data);
    }
    this.setState({ selectedIndexes: currentHeaderIds, selectedListItems: currentHeaderItems });
  }

  render() {
    const { listItems, headerName, listItemStyle, checkboxProp, headerStyle, theme, onLoading } = this.props;
    const { selectedIndexes } = this.state;
    return (
      <View style={{ flex: 1 }}>
        { !!headerName &&
          <CheckListHeader
            theme={theme}
            isActive={selectedIndexes.length === listItems.length && listItems.length > 0}
            text={headerName}
            onPress={this.selectAllItems}
            style={headerStyle}
          />
        }
        { !listItems.length ? onLoading() :
        <ScrollView>
          { listItems.map((data) => (
            <CheckListItem
              theme={theme}
              key={`${data.id}`}
              isActive={selectedIndexes.indexOf(data.id) > -1}
              text={data.name}
              onPress={() => this.selectCurrentItem(data)}
              checkboxProp={checkboxProp}
              style={listItemStyle}
            />
          ))}
        </ScrollView>
        }
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
};

CheckboxList.defaultProps = {
  listItems: [],
  selectedListItems: [],
  headerName: '',
  listItemStyle: {},
  checkboxProp: {},
  headerStyle: {},
  onChange: () => {},
  onLoading: () => null,
  theme: '#1A237E',
};

export default CheckboxList;

