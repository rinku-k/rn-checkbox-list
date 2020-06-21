import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import CheckListItem from './checkListItem';
import CheckListHeader from './checkListHeader';

class CheckboxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndexes: (props.selectedListItem || []).map(item => item.id),
      selectedItems: props.selectedListItem || [],
    };
    this.selectAllItems = this.selectAllItems.bind(this);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    this.props.onChange({ ids: nextState.selectedIndexes, items: nextState.selectedItems });
    return true;
  }

  selectAllItems() {
    const { selectedIndexes } = this.state;
    const { listItems } = this.props;
    if (selectedIndexes.length < listItems.length) {
      this.setState({
        selectedIndexes: listItems.map(item => item.id),
        selectedItems: listItems,
      });
    } else {
      this.setState({
        selectedIndexes: [],
        selectedItems: [],
      });
    }
  }

  unSelectAllItem() {
    this.setState({
      selectedIndexes: [],
      selectedItems: [],
    })
  }

  selectCurrentItem(data) {
    const { selectedIndexes, selectedItems } = this.state;
    const currentHeaderIds = selectedIndexes;
    const currentHeaderItems = selectedItems;
    const currentSelectedIndex = currentHeaderIds.indexOf(data.id);
    if (currentSelectedIndex > -1) {
      currentHeaderIds.splice(currentSelectedIndex, 1);
      currentHeaderItems.splice(currentSelectedIndex, 1);
    } else {
      currentHeaderIds.push(data.id);
      currentHeaderItems.push(data);
    }
    this.setState({ selectedIndexes: currentHeaderIds, selectedItems: currentHeaderItems });
  }

  render() {
    const { listItems, headerName, listItemStyle, headerStyle, theme, onLoading } = this.props;
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
  headerName: PropTypes.string,
  listItemStyle: PropTypes.object,
  selectedListItem: PropTypes.array,
  headerStyle: PropTypes.object,
  onChange: PropTypes.func,
  onLoading: PropTypes.func,
  theme: PropTypes.string,
};

CheckboxList.defaultProps = {
  listItems: [],
  headerName: '',
  listItemStyle: {},
  headerStyle: {},
  onChange: () => {},
  onLoading: () => null,
  theme: '#1A237E',
}

export default CheckboxList;

