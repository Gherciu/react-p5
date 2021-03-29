import React from 'react';
import { render } from '@testing-library/react';
import Sketch from './index';

const reactP5TestId = 'react-p5';
let MockComponent = null;

beforeEach(() => {
  MockComponent = (...rest) => {
    const setup = (p, canvasParentRef) => {
      p.createCanvas(500, 500).parent(canvasParentRef);
      p.background(0);
    }
    return (<Sketch setup={setup} {...rest} />);
  }
});

describe('react-p5', () => {
  it('Should render MockComponent without errors', () => {
    const { getByTestId } = render(<MockComponent />);

    expect(getByTestId(reactP5TestId)).toBeDefined()
  });
});
