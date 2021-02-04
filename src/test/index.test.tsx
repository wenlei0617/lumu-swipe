import React from 'react';
import LumuSwipe from '../index';
import { render } from '@testing-library/react';

const Basic = () => {
  return (
    <LumuSwipe>
      <LumuSwipe.Item>1</LumuSwipe.Item>
    </LumuSwipe>
  )
}

describe('ExampleComponent', () => {
  it('is truthy', () => {
    const {} = render(<Basic/>)
    expect(LumuSwipe).toBeTruthy()
  })
})
