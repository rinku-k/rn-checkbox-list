# rn-checkbox-list

![npm version](https://badge.fury.io/js/rn-checkbox-list.svg)


The goal of `rn-checkbox-list` is to achieve the checkbox list with minimal effort and easy customisation.

<p align="center">
<img src="/.github/initial.jpeg" height="500" />
<img src="/.github/single_select.jpeg" height="500" />
<img src="/.github/select_all.jpeg" height="500" />
</p>

## Setup

This library is available on npm, install it with: `npm i rn-checkbox-list` or `yarn add rn-checkbox-list`.

## Usage

1.  Import rn-checkbox-list:

```javascript
import CheckboxList from "rn-checkbox-list";
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
| headerName              | string           | ''                            | Shows header with the given name                                                                                               |
| listItemStyle                   | object | {}                 | Each checkboxes style                                                                                                                      |
| headerStyle             | object           | {}                            | Header checkbox style                                       |


## Upcoming improvements
1. Importing checkbox through updated react-native package
2. Customisable checkboxes

Pull requests, feedbacks and suggestions are welcome!
