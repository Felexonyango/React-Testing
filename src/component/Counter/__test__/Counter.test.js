import React from 'react';
import {render,screen} from '@testing-library/react'
import Counter from "../Counter"
import '@testing-library/jest-dom/extend-expect'


test('header renders with correct text',()=>{

 const  {getByTestId}=render(<Counter/>);
 const headerEl= screen.getByTestId("header")

expect(headerEl.textContent).toBe("counter")


})
test("counter intially start at 0",()=>{
const  {getByTestId}=render(<Counter/>);

const counterEl= screen.getByTestId("counter")

expect(counterEl.textContent).toBe("0")


})
test("add button renders with correct +",()=>{
    const  {getByTestId}=render(<Counter/>);
    
    const addEl= screen.getByTestId("btn")
    
    expect(addEl.textContent).toBe("+")
    
    
    })
    test("sub button renders with correct -",()=>{
        const  {getByTestId}=render(<Counter/>);
        
        const subtractEl= screen.getByTestId("sub")
        
        expect(subtractEl.textContent).toBe("-")
        
        
        })