import React, { Component } from 'react';
import CheckboxList from '../src/checkList';

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
  { id: 12, name: 'Free Solo' },
  { id: 13, name: 'Period. End of Sentence.' },
  { id: 14, name: 'Skin' },
  { id: 15, name: 'Spider-Man: Into the Spider-Verse' }];

class Selector extends Component {
  render() {
    return (
      <CheckboxList
        headerName="Movies"
        listItems={data}
        onChange={(data) => console.log("My updated list :: ", data)}
        // listItemStyle={{ borderBottomColor: '#eee', borderBottomWidth: 1 }}
      />
    );
  }
}

export default Selector;