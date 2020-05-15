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

  // it('Should change the background color succefully', async () => {
  //   const { container, getByTestId } = render(<Main />)

  //   fireEvent.change(
  //     getByTestId('input-textarea'), { 
  //       target: { 
  //         value: 'Test' 
  //       } 
  //     }
  //   )

  //   fireEvent.click(container.querySelector('.circle-picker').children[0].children[0].children[0].children[0])

  //   // fireEvent.click(container.querySelector('.circle-picker').children)
    
  //   // expect(getByTestId('output-div')).toHaveStyle('background-color: rgb(76, 175, 80)')
  // })
})