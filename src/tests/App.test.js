import React from 'react'
import { render } from '@testing-library/react'

import App from '../App'

test('Should render the app whitout errors', () => {
  const { getByText } = render(<App />)

  const inputComponent = getByText(/Insert your text/i)
  const customizeComponent = getByText(/Customize/i)
  const resultComponent = getByText(/Enjoy the result/)

  expect(inputComponent).toBeInTheDocument()
  expect(customizeComponent).toBeInTheDocument()
  expect(resultComponent).toBeInTheDocument()
})
