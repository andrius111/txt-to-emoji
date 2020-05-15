import React from 'react'
import { render } from '@testing-library/react'

import Input from '../components/Main/Input'

test('Should render the Input component whitout errors', () => {
  const { getByTestId } = render(<Input setValue={ () => false } />)

  const inputComponent = getByTestId('input-component')
  
  expect(inputComponent).toBeInTheDocument()
})