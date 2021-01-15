# rn-checkbox-list

![npm version](https://badge.fury.io/js/rn-checkbox-list.svg)

The goal of `rn-checkbox-list` is to achieve the checkbox list with minimal effort and easy customisation.

<p align="center">
  <img src="/.github/demo.gif" height="500" />
  <img src="/.github/ios.gif" height="500" />
</p>

<details>
  <summary>Android screenshots</summary>

  <p align="center">
    <img src="/.github/initial.jpeg" height="500" />
    <img src="/.github/single_select.jpeg" height="500" />
    <img src="/.github/select_all.jpeg" height="500" />
    <img src="/.github/loader.jpeg" height="500" />
  </p>
</details>

<details>
  <summary>iOS screenshots</summary>

  <p align="center">
    <img src="/.github/ios_select.png" height="500" />
    <img src="/.github/ios_select_purple.png" height="500" />
  </p>
</details>

## Support

| rn-checkbox-list version | Platform              |
| ------------------------ | --------------------- |
| > 0.3                    | Android, iOS, Windows |
| <=0.2                    | Android               |

## Setup

This library is available on [npm](https://www.npmjs.com/package/rn-checkbox-list), install it with:
`npm i rn-checkbox-list`
or
`yarn add rn-checkbox-list`

## Usage

1.  Import rn-checkbox-list:

```javascript
import CheckboxList from 'rn-checkbox-list';
```

2.  Create data with id and name:

```javascript
[{ id: 1, name: 'Green Book' }, { id: 2, name: 'Bohemian Rhapsody' }];
```

3.  Add data to imported component

```javascript
<CheckboxList headerName="This is header name" listItems={data} />
```

## Sample example

```javascript
<CheckboxList
  headerName="Movies"
  theme="red"
  listItems={data}
  onChange={({ ids, items }) => console.log('My updated list :: ', ids)}
  listItemStyle={{ borderBottomColor: '#eee', borderBottomWidth: 1 }}
  checkboxProp={{ boxType: 'square' }} // iOS (supported from v0.3.0)
  onLoading={() => <LoaderComponent />}
/>
```

To check for complete example [here](https://github.com/rinku-k/rn-checkbox-list/blob/master/example/index.js).

## Available props

| Name              | Type         | Default | Description                                           |
| ----------------- | ------------ | ------- | ----------------------------------------------------- |
| listItems         | object array | []      | List of checkboxes                                    |
| selectedListItems | object array | []      | List of selected items(subset of `listItems`)         |
| headerName        | string       | ''      | Shows header with the given name                      |
| listItemStyle     | object       | {}      | Each check list style                                 |
| checkboxProp      | object       | {}      | Custom checkbox style                                 |
| headerStyle       | object       | {}      | Header check list style                               |
| onChange          | function     | null    | Fires on each checkbox select or deselect             |
| onLoading         | function     | null    | When the list is empty and a loader needs to be shown |
| theme             | string       | #1A237E | Custom theme color for checkbox                       |

## Improvements

- [x] Importing checkbox through updated react-native package (removing warnings)
- [x] Customisable checkbox colors
- [x] Provide selected items and selected ids
- [x] Support for default selected items
- [x] Support iOS

Pull requests, feedbacks and suggestions are welcome!
