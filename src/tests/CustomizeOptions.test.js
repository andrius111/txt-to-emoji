import React from 'react'
import { render } from '@testing-library/react'

import CustomizeOptions from '../components/Main/Customize/CustomizeOptions'

test('Should render the CustomizeOptions component whitout errors', () => {
  const { getByTestId } = render(
    <CustomizeOptions 
      setOutputStyle={ () => false }
      handleEmoji={ () => false }
    />
  )

  const customizeOptionsComponent = getByTestId('customize-options-component')
  
  expect(customizeOptionsComponent).toBeInTheDocument()
})