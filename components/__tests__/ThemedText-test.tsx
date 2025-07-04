import * as React from 'react';
import renderer, { act } from 'react-test-renderer';

import { ThemedText } from '../ThemedText';

jest.mock('@/hooks/useThemeColor', () => ({
  useThemeColor: jest.fn(() => '#11181C'),
}));

it(`renders correctly`, () => {
  let tree: renderer.ReactTestRenderer | undefined;
  act(() => {
    tree = renderer.create(<ThemedText>Snapshot test!</ThemedText>);
  });
  expect(tree?.toJSON()).toMatchSnapshot();
});
