import React from 'react'
import { render } from '@testing-library/react'

import Customize from '../components/Main/Customize'

test('Should render the Customize component whitout errors', () => {
  const { getByTestId } = render(
    <Customize 
      emoji=''
      setEmoji={ () => false }
      setOutputStyle={ () => false }
      setEmojiSizeClass={ () => false }
    />
  )

  const customizeComponent = getByTestId('customize-component')
  
  expect(customizeComponent).toBeInTheDocument()
})