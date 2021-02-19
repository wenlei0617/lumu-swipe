import React from 'react';
import { render, cleanup } from '@testing-library/react';
import LumuSwipe from '..';

afterEach(cleanup);
beforeAll(() => {
  window.Element.prototype.getBoundingClientRect = jest.fn().mockReturnValue({
    width: 300, height: 100
  })
})

const Basic = () => {
  return (
    <LumuSwipe>
      <LumuSwipe.Item>1</LumuSwipe.Item>
      <LumuSwipe.Item>2</LumuSwipe.Item>
      <LumuSwipe.Item>3</LumuSwipe.Item>
    </LumuSwipe>
  )
}

describe('Basic', () => {
  test('页面渲染是否正确', () => {
    const { debug } = render(<Basic/>);
    // debug();
    // expect(asFragment()).toMatchSnapshot();
  })
})
