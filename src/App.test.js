/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

// Mock the MainRoutes component
jest.mock('./routes', () => ({
  MainRoutes: () => <div data-testid="main-routes">Mocked MainRoutes</div>,
}));

// eslint-disable-next-line no-undef
describe('App Component', () => {
  it('renders without crashing', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders MainRoutes component', () => {
    const tree = renderer.create(<App />);
    expect(tree.root.findByProps({ 'data-testid': 'main-routes' }).children).toEqual(['Mocked MainRoutes']);
  });
});
