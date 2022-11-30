import React, { Component } from 'react';
import CheckboxList from '../src/checkList';
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  Platform,
  Image,
} from 'react-native';
import Emojis from './images';

const data = Emojis;

const renderItem = ({ item }) => {
  return (
    <View
      style={{ flexDirection: 'row', alignItems: 'center' }}
      key={item.name}>
      <Image source={item.src} style={{ width: 50, height: 50 }} />
      <Text
        numberOfLines={1}
        style={{
          fontSize: 20,
          color: '#626262',
          margin: 10,
        }}>
        {item.name}
      </Text>
    </View>
  );
};

class Selector extends Component {
  constructor(props) {
    super(props);
    this.preSelectedItems = data.slice(0, 4);
    this.state = {
      loader: true,
      selectedItems: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loader: false });
      this.setState({ selectedItems: this.preSelectedItems });
    }, 500);
  }

  render() {
    const theme = 'red';
    const border = 'grey';
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <CheckboxList
            headerName="Emojis"
            theme={theme}
            listItems={this.state.loader ? [] : data}
            onChange={({ ids, items }) => {
              // eslint-disable-next-line no-console
              console.log('My updated list :: ', ids, items);
              this.setState({ selectedItems: items });
            }}
            onLoading={() => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ActivityIndicator size="large" color="red" />
                <Text style={{ fontSize: 16, color: '#555555' }}>
                  Loading....
                </Text>
              </View>
            )}
            selectedListItems={data.slice(0, 4)}
            checkboxProp={Platform.select({
              // Optional
              ios: {
                // iOS (supported from v0.3.0)
                boxType: 'square',
                tintColor: border,
                onTintColor: theme,
                onCheckColor: '#fff',
                onFillColor: theme,
              },
              android: {
                tintColors: {
                  true: theme,
                  false: border,
                },
              },
            })}
            renderItem={renderItem}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 20,
            right: 10,
            height: 20,
            borderRadius: 4,
          }}>
          <Text>Total selected : {this.state.selectedItems.length}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Selector;
