import React from 'react';
import {render,screen} from '@testing-library/react'
import Counter from "../Counter"
import '@testing-library/jest-dom/extend-expect'

const renderComponent = () => {
    return render(<Counter/>);
  };
  
beforeEach(() => {
 const {getByTestId} =renderComponent()
})

test('header renders with correct text',()=>{


 const headerEl= screen.getByTestId("header")

expect(headerEl.textContent).toBe("counter")


})
test("counter intially start at 0",()=>{

const counterEl= screen.getByTestId("counter")

expect(counterEl.textContent).toBe("0")


})
test("add button renders with correct +",()=>{

    
    const addEl= screen.getByTestId("btn")
    
    expect(addEl.textContent).toBe("+")
    
    
    })
    test("sub button renders with correct -",()=>{

        
        const subtractEl= screen.getByTestId("sub")
        
        expect(subtractEl.textContent).toBe("-")
        
        
        })