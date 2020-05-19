import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Main from '../components/Main'

describe('Main component tests', () => {
  it('Should render the Main component without errors', () => {
    const { getByTestId } = render(<Main />)
  
    const mainComponent = getByTestId('main-component')
  
    expect(mainComponent).toBeInTheDocument()
  })

  it('Should insert a text and render in the output', () => {
    const { getByTestId } = render(<Main />)

    fireEvent.change(
      getByTestId('input-textarea'), { 
        target: { 
          value: 'ABCDEFGHIJKLMNOPQRSTUVXZKWY0123456789`"/˜]][[[}}{[=-+!@#$%%¨&*()_\\|/;..+-ÁÉÍÓÚÃÇ' 
        } 
      }
    )

    expect(getByTestId('output-div')).toHaveTextContent('😀')
  })

  it('Should change the emoji succefully', () => {
    const { container, getByTestId } = render(<Main />)

    fireEvent.change(
      getByTestId('input-textarea'), { 
        target: { 
          value: 'Test' 
        } 
      }
    )

    fireEvent.click(container.querySelector('[aria-label="😴, sleeping"]'))

    expect(getByTestId('output-div')).toHaveTextContent('😴')
  })

  it('Should not accept an emoji size less than 0 and bigger then 30', () => {
    const { getByTestId } = render(<Main />)

    const emojiSizeComponent = getByTestId('input-emoji-size')

    fireEvent.change(
      emojiSizeComponent, {
        target: {
          value: 45
        }
      }
    )

    expect(getByTestId('output-div')).toHaveStyle('font-size: ')

    fireEvent.change(
      emojiSizeComponent, {
        target: {
          value: -10
        }
      }
    )

    expect(getByTestId('output-div')).toHaveStyle('font-size: ')
  })

  it('Should change de emoji size succefully', () => {
    const { getByTestId } = render(<Main />)

    fireEvent.change(
      getByTestId('input-emoji-size'), {
        target: {
          value: 25
        }
      }
    )

    expect(getByTestId('output-div')).toHaveStyle('font-size: 25px')
  })

  it('Should change the align succefully', () => {
    const { getByTestId, getByTitle } = render(<Main />)

    const outputComponent = getByTestId('output-div')

    fireEvent.click(getByTitle('Align Horizontal Center'))
    fireEvent.click(getByTitle('Align Vertical Center'))

    expect(outputComponent).toHaveStyle('align-items: center')
    expect(outputComponent).toHaveStyle('align-content: center')
  })

  it('Should reset customization', () => {
    const { container, getByTestId, getByTitle } = render(<Main />)
  
    const outputComponent = getByTestId('output-div')

    fireEvent.click(getByTitle('Align Horizontal Center'))
    fireEvent.click(getByTitle('Align Vertical Center'))

    fireEvent.change(
      getByTestId('input-textarea'), { 
        target: { 
          value: 'Test' 
        } 
      }
    )

    fireEvent.click(container.querySelector('[aria-label="😴, sleeping"]'))

    fireEvent.change(
      getByTestId('input-emoji-size'), {
        target: {
          value: 25
        }
      }
    )

    fireEvent.click(getByTestId('button-reset'))

    expect(outputComponent).toHaveStyle('')
    expect(outputComponent).toHaveTextContent('😀')
  })
})