import React from 'react'
import { render } from '@testing-library/react'

import EmojiPicker from '../components/Main/Customize/EmojiPicker'

test('Should render the EmojiPicker component whitout errors', () => {
  const { getByTestId } = render(
    <EmojiPicker 
      emoji=''
      setEmoji={ () => false }
    />
  )

  const emojiPickerComponent = getByTestId('emoji-picker-component')
  
  expect(emojiPickerComponent).toBeInTheDocument()
})