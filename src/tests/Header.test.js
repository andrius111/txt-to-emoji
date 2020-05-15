import React from 'react'
import { render } from '@testing-library/react'

import Header from '../components/Header'

test('Should render the Header component without errors', () => {
  const { getByTestId } = render(<Header />)

  const logoComponent = getByTestId('header-component')

  expect(logoComponent).toBeInTheDocument()
})