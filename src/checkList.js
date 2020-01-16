import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import CheckListItem from './checkListItem';
import CheckListHeader from './checkListHeader';

class CheckboxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
    };
    this.selectAllItems = this.selectAllItems.bind(this);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    this.props.onChange(nextState.selectedItems);
    return true;
  }

  selectAllItems() {
    const { selectedItems } = this.state;
    const { listItems } = this.props;
    if (selectedItems.length < listItems.length) {
      this.setState({
        selectedItems: listItems.map(item => item.id),
      });
    } else {
      this.setState({
        selectedItems: [],
      });
    }
  }

  selectCurrentItem(itemId) {
    const { selectedItems } = this.state;
    const currentHeaderItems = selectedItems;
    if (currentHeaderItems.indexOf(itemId) > -1) {
      currentHeaderItems.splice(currentHeaderItems.indexOf(itemId), 1);
    } else {
      currentHeaderItems.push(itemId);
    }
    this.setState({ selectedItems: currentHeaderItems });
  }

  render() {
    const { listItems, headerName, listItemStyle, headerStyle, theme } = this.props;
    const { selectedItems } = this.state;
    return (
      <View style={{ flex: 1 }}>
        { !!headerName &&
          <CheckListHeader
            theme={theme}
            isActive={selectedItems.length === listItems.length}
            text={headerName}
            onPress={this.selectAllItems}
            style={headerStyle}
          />
        }
        <ScrollView>
          { listItems.map(({ id, name }) => (
            <CheckListItem
              theme={theme}
              key={`${id}`}
              isActive={selectedItems.indexOf(id) > -1}
              text={name}
              onPress={() => this.selectCurrentItem(id)}
              style={listItemStyle}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

CheckboxList.propTypes = {
  listItems: PropTypes.array,
  headerName: PropTypes.string,
  listItemStyle: PropTypes.object,
  headerStyle: PropTypes.object,
  onChange: PropTypes.func,
  theme: PropTypes.string,
};

CheckboxList.defaultProps = {
  listItems: [],
  headerName: '',
  listItemStyle: {},
  headerStyle: {},
  onChange: () => {},
  theme: '#1A237E',
}

export default CheckboxList;

