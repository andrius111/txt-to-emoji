import React from 'react'
import { render } from '@testing-library/react'

import Footer from '../components/Footer'

test('Should render the Footer component without errors', () => {
  const { getByTestId } = render(<Footer />)

  const footerComponent = getByTestId('footer-component')

  expect(footerComponent).toBeInTheDocument()
})