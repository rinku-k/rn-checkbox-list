# rn-checkbox-list

![npm version](https://badge.fury.io/js/rn-checkbox-list.svg)


The goal of `rn-checkbox-list` is to achieve the checkbox list with minimal effort and easy customisation.

<p align="center">
<img src="/.github/initial.jpeg" height="500" />
<img src="/.github/single_select.jpeg" height="500" />
<img src="/.github/select_all.jpeg" height="500" />
</p>

<p align="center">
<img src="/.github/demo.gif" height="500" />
<img src="/.github/loader.jpeg" height="500" />
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
```javascript
<CheckboxList
	headerName="Movies"
	theme="red"
	listItems={data}
	onChange={(data) => console.log("My updated list :: ", data)}
	listItemStyle={{ borderBottomColor: '#eee', borderBottomWidth: 1 }}
	onLoading={() => (<LoaderComponent />)}
/>
```
For a example, take a look at the `/example` directory.

## Available props

| Name                           | Type             | Default                        | Description                                                                                                                                |
| ------------------------------ | ---------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| listItems        | object array | []          | List of checkboxes|
| headerName       | string       | ''          | Shows header with the given name|
| listItemStyle    | object 			| {}          | Each check list style|
| headerStyle      | object       | {}          | Header check list style|
| onChange      	 | function     | null        | Fires on each checkbox select or deselect|
| onLoading      	 | function     | null    		| When the list is empty and a loader needs to be shown|
| theme      	 		 | string       | #1A237E     | Custom theme color for checkbox|


## Improvements
- [x] Importing checkbox through updated react-native package (removing warnings)
- [x] Customisable checkbox colors

Pull requests, feedbacks and suggestions are welcome!
