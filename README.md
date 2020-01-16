# react-native-checkbox-list-view

![npm version](https://badge.fury.io/js/react-native-checkbox-list-view.svg)


The goal of `react-native-checkbox-list-view` is to achieve the checkbox list with minimal effort and easy customisation.

<p align="center">
<img src="/.github/initial.jpeg" height="500" />
<img src="/.github/single_select.jpeg" height="500" />
<img src="/.github/select_all.jpeg" height="500" />
</p>

## Setup

This library is available on npm, install it with: `npm i react-native-checkbox-list-view` or `yarn add react-native-checkbox-list-view`.

## Usage

1.  Import react-native-checkbox-list-view:

```javascript
import CheckboxList from "react-native-checkbox-list-view";
```

2.  Create data with id and name:

```javascript
[{ id: 1, name: 'Green Book' }, { id: 2, name: 'Bohemian Rhapsody' }];
```
3.  Add data to imported component

```javascript
<CheckboxList
	headerName="This is header name"
	listItems={data}
/>
```

## A complete example
For a example, take a look at the `/example` directory.

## Available props

| Name                           | Type             | Default                        | Description                                                                                                                                |
| ------------------------------ | ---------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| listItems                    | object array | []                    | List of checkboxes                                                                                                                       |
| headerName              | string           | ''                            | shows header with the given name                                                                                               |
| listItemStyle                   | object | {}                 | each checkboxes style                                                                                                                      |
| headerStyle             | object           | {}                            | Header checkbox style                                       |

## Upcoming improvements
1. Importing checkbox through updated react-native package
2. Customisable checkboxes

Pull requests, feedbacks and suggestions are welcome!
