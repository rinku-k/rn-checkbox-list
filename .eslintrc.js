module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react-native/no-inline-styles': 0, // to save on unnecessary StyleSheet creation for flex:1
    'sort-imports': 0, // this is not necessary
  },
};
