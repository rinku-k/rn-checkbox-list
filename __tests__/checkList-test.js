/**
 * @format
 */

import 'react-native';
import React from 'react';
import CheckboxList from '../src/checkList';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';

it('renders correctly', () => {
  let component;
  act(() => {
    component = renderer.create(<CheckboxList />);
  });
  act(() => {
    component.unmount();
  });
});
