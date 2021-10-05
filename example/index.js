import React, { Component } from 'react';
import CheckboxList from '../src/checkList';
import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  Platform,
} from 'react-native';

const data = [
  { id: 1, name: 'Green Book' },
  { id: 2, name: 'Bohemian Rhapsody' },
  { id: 3, name: 'Roma' },
  { id: 4, name: 'Black Panther' },
  { id: 5, name: 'The Favourite' },
  { id: 6, name: 'A Star Is Born' },
  { id: 7, name: 'Vice' },
  { id: 8, name: 'BlacKkKlansman' },
  { id: 9, name: 'First Man' },
  { id: 10, name: 'If Beale Street Could Talk' },
  { id: 11, name: 'Bao' },
  { id: 12, name: 'Harry Potter and the Deathly Hallows – Part 1' },
  { id: 13, name: 'Free Solo' },
  { id: 14, name: 'Period. End of Sentence.' },
  { id: 15, name: 'Skin' },
  { id: 16, name: 'Spider-Man: Into the Spider-Verse' },
];

const textProp = {
  numberOfLines: 1,
  style: {
    fontSize: 20,
    color: '#626262',
  },
};

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loader: false }), 500);
  }

  render() {
    const theme = 'red';
    const border = 'grey';
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CheckboxList
          headerName="Movies"
          theme={theme}
          listItems={this.state.loader ? [] : data}
          onChange={({ ids, items }) => console.log('My updated list :: ', ids)}
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
          textProp={textProp}
          // listItemStyle={{ borderBottomColor: "#eee", borderBottomWidth: 1 }}
        />
      </SafeAreaView>
    );
  }
}

export default Selector;
