import React from 'react'
import { render } from '@testing-library/react'

import Output from '../components/Main/Output'

test('Should render the Output component whitout errors', () => {
  const { getByTestId } = render(
    <Output 
      value="test" 
      style={{}}
    />
  )

  const outputComponent = getByTestId('output-component')
  
  expect(outputComponent).toBeInTheDocument()
})