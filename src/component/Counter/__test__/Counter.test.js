import React from 'react';
import {render,screen} from '@testing-library/react'
import Counter from "../Counter"
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'


test('header renders with correct text',()=>{
  render(<Counter />)

 const headerEl= screen.getByTestId("header")

expect(headerEl.textContent).toBe("counter")


})
test("counter intially start at 0",()=>{
  render(<Counter />)

const counterEl= screen.getByTestId("counter")

expect(counterEl.textContent).toBe("0")


})
test("add button renders with correct +",async()=>{

  render(<Counter />)
  const button = screen.getByTestId("btn-add")
//instead of fireEvent Eslint provides userEvent
  await userEvent.click(button)

   
    expect(button.textContent).toBe("+")
    
    
    })
    test("sub button renders with correct -",async()=>{

      render(<Counter />)
      const button = screen.getByTestId("btn-sub")
//instead of fireEvent Eslint provides userEvent
  await userEvent.click(button)

   
    expect(button.textContent).toBe("-")
    
        
        })